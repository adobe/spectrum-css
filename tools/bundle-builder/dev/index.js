/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const fs = require("fs")
const browserSync = require("browser-sync")
const path = require("path")
const glob = require("glob")
const chokidar = require("chokidar")
const async = require("async")
const logger = require("../lib/logger")
const dirs = require("../lib/dirs")
const docs = require("../docs")
const subrunner = require("../subrunner")
const bundleBuilder = require("../index.js")

function serve() {
  let PORT = 3000

  if (process.env.BROWSERSYNC_PORT) {
    PORT = process.env.BROWSERSYNC_PORT
    logger.info(`Setting '${PORT} as port for browsersync, which hopefully is valid`)
  }

  if (process.env.BROWSERSYNC_OPEN === "true") {
    logger.info("New browser instance will open")
  }

  browserSync({
    startPath: "docs/index.html",
    server: `${process.cwd()}/dist/`,
    notify: process.env.BROWSERSYNC_NOTIFY === "true",
    open: process.env.BROWSERSYNC_OPEN === "true",
    port: PORT,
  })
}

function getPackageFromPath(filePath) {
  return filePath.match(`${dirs.components}/(.*?)/`)[1]
}

function watchWithinPackages(globContent, task, files) {
  // Code to log the start of the watch goes here
  logger.debug(`Watching ${globContent}, will run ${task} and stream ${files}`)
  let changedFile = null
  const watcher = chokidar.watch(globContent, {
    // Otherwise we get infinite loops because chokidar gets all crazy with symlinked deps
    followSymlinks: false,
  }, (done) => {
    if (!changedFile) {
      done();
      return;
    }
    const packageName = getPackageFromPath(changedFile);
    const packageDir = path.join(dirs.components, packageName);
    if (typeof task === 'function') {
      task(changedFile, packageName, (err) => {
        done(err);
        changedFile = null;
      });
    }
    else {
      subrunner.runComponentTask(packageDir, task, (err) => {
        if (err) {
          changedFile = null;
          return done(err);
        }
        // Copy files
        fs.copyFile(`${dirs.components}/${packageName}/dist/${files}`, 
          `dist/components/${packageName}/`,
          (error) => {
            if (error) {
              changedFile = null;
              return done(err);
            }
            logger.debug(`Injecting files from ${packageName}/:\n  ${files}`);

            // Inject
            browserSync.reload();
            changedFile = null;
            done();         
          });
      });
    }
  });

  watcher.on("change", (filePath) => {
    logger.debug(`Got change for ${filePath}`)

    if (changedFile === null) {
      changedFile = filePath
    }
  })
}

function reload(cb) {
  browserSync.reload()
  if (cb) {
    cb()
  }
}

function watchSite() {
  // *.njk
  const pattern1 = path.join(dirs.site, "*.njk")
  glob(pattern1, (error, files) => {
    if (error) {
      console.error("Error in bundle_builder dev " + error)
      return
    }

    files.forEach((file) => {
      chokidar.watch(file, async (eventType) => {
        if (eventType === "change") {
          try {
            await docs.buildSite_pages()
            await reload()
          } catch (e) {
            console.err(e)
          }
        }
      })
    })
  })

  // inlucdes/*.njk
  const pattern2 = path.join(dirs.site, "includes/*.njk")
  glob(pattern2, (error, files) => {
    if (error) {
      console.error("Error in bundle_builder dev " + error)
      return
    }

    files.forEach((file) => {
      chokidar.watch(file, async (eventType) => {
        if (eventType === "change") {
          try {
            await Promise.all([
              docs.buildSite_html(),
              docs.buildDocs()
            ])
            await reload();
          } catch (e) {
            console.error(e)
          }
        }
      })
    })
  })

  // templates/siteComponent.njk
  const templates = [
    path.join(dirs.site, "templates", "siteComponent.njk"),
    path.join(dirs.site, "util.js"),
  ]
  templates.forEach((template) => {
    chokidar.watch(template, async (eventType) => {
      if (eventType === "change") {
        try {
          await Promise.all([
            docs.buildDocs()
          ])
          await reload()
        } catch (e) {
          console.error(e)
        }        
      }
    })
  })

  const patterns = [
    path.join(dirs.site, "resources", "css", "*.css"),
    path.join(dirs.site, "resources", "js", "*.js"),
  ]

  patterns.forEach((pattern) => {
    glob(pattern, (error, files) => {
      if (error) {
        console.error("Error in bundle_builder dev " + error)
        return
      }

      files.forEach((file) => {
        chokidar.watch(file, async (eventType) => {
          if (eventType === "change") {
            try {
              await docs.buildSite_copyFreshResources();
              async function injectSiteResources() {
                const cssFiles = fs.readdirSync(path.join('dist', 'docs', 'css')).filter((fl) => fl.endsWith('.css'));
                const jsFiles = fs.readdirSync(path.join('dist', 'docs', 'js')).filter((fl) => fl.endsWith('.js'));
                const allFiles = [...cssFiles, ...jsFiles];
                allFiles.forEach((fl) => {
                  browserSync.stream(path.join('dist', 'docs', fl));
                });
              }
            } catch (e) {
              console.error(e)
            }
          }
        })
      })
    })
  })
}

function watchCommons() {
  chokidar.watch(`${dirs.components}/commons/*.css`, async (eventType) => {
    if (eventType === "change") {
      try {
        await bundleBuilder.buildDepenenciesOfCommons();
        await bundleBuilder.copyPackages();
        await reload()
      } catch (e) {
        console.error(e)
      }
    }
  })
}

function watch() {
  serve()

  watchCommons()

  watchWithinPackages(`${dirs.components}/tokens/custom-*/*.css`, 'rebuildCustoms', '*.css');

  watchWithinPackages(`${dirs.components}/*/{index,skin}.css`, 'buildMedium', '*.css');
  watchWithinPackages(`${dirs.components}/*/themes/{spectrum,express}.css`, 'buildMedium', '*.css');

  watchWithinPackages(
    [
      `${dirs.components}/*/metadata/*.yml`,
      `${dirs.components}/*/metadata.yml`,
    ],
    (changedFile, packageContent, done) => {
      try {
        let result = async.series(
          // Get data first so nav builds
          () => {
            logger.debug(`Building nav data for ${packageContent}`)
            return docs.buildSite_getData()
          },
          () => {
            logger.debug(`Building docs for ${packageContent}`)
            return docs.buildDocs_forDep(packageContent)
          }
        )()
        // this catches yaml parsing errors
        // should stop the series from running
      } catch (error) {
        done(error)
      } finally {
        // we have to do this
        done()
        reload()
      }
    }
  )

  watchSite()
}

exports.watch = watch
