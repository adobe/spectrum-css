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

const through = require("through2")
const fs = require("fs")
const path = require("path")
const fsp = require("fs").promises
const semver = require("semver")
const glob = require("glob")
const del = require("del")
const builder = require("./tools/bundle-builder")
const test = require("./tools/test-builder")
const site = require("./site/index.js")
const subrunner = require("./tools/bundle-builder/subrunner")

Object.assign(exports, builder)
Object.assign(exports, test)
Object.assign(exports, site)

// read all the package.json packages under components
async function readPackage(component) {
  try {
    return JSON.parse(await fsp.readFile(path.join(component, "package.json")))
  } catch (err) {
    console.trace()
    throw new Error(`Error while parsing JSON: for ${component}: ${err}`)
  }
}

// write all the packages.json
async function writePackage(component, pack) {
  return fsp.writeFile(
    path.join(component, "package.json"),
    JSON.stringify(pack, null, 2)
  )
}

// check all dependencies on the packages
async function checkPeerDependencies() {
  const packagesDir = "./components"

  const components = (await fsp.readdir(packagesDir, { withFileTypes: true }))
    .filter((dirent) => dirent.isDirectory() || dirent.isSymbolicLink())
    .map((dirent) => path.join(packagesDir, dirent.name))
  try {
    await Promise.all(
      components.map(async (component) => {
        const pack = await readPackage(component)

        if (pack.peerDependencies) {
          Object.keys(pack.peerDependencies).forEach((dependency) => {
            const devDepVer = pack.devDependencies[dependency].replace("^", "")
            const peerDepVer = pack.peerDependencies[dependency]
            if (devDepVer) {
              if (!semver.satisfies(devDepVer, peerDepVer)) {
                console.error(
                  `${component} has out of date peerDependencies ${dependency} (found ${devDepVer}, does not satisfy ${peerDepVer})`
                )

                // Set a new peer dependency, stripping the beta version number
                const newPeerDepVer = "^" + devDepVer.replace(/-\d+$/, "")
                pack.peerDependencies[dependency] = newPeerDepVer
                console.error(`  Updated ${dependency} to ${newPeerDepVer}`)
              }
            } else {
              throw new Error(
                `${component} has ${dependency} in peerDependencies, but not devDependencies!`
              )
            }
          })

          await writePackage(component, pack)
        }
      })
    )
  } catch (e) {
    throw new Error(e)
  }
}

// not working
async function releaseBundles() {
  const bundlesDir = "./bundles"

  const bundles = (await fsp.readdir(bundlesDir, { withFileTypes: true }))
    .filter((dirent) => dirent.isDirectory() || dirent.isSymbolicLink())
    .map((dirent) => path.join(process.cwd(), bundlesDir, dirent.name))

  await subrunner.runTaskOnPackages("release", bundles)
}

// working
function graduatePeerDeps() {
  function isPrerelease(version) {
    return version.match(/-(alpha)|(beta)/);
  }

  glob('components/*/package.json', (err, files) => {
    if (err) {
      console.error(err);
      return;
    }

    files.forEach((file) => {
      let data = JSON.parse(fs.readFileSync(file, 'utf8'));

      if (data.peerDependencies) {
        for (let [peerDep, version] of Object.entries(data.peerDependencies)) {
          if (isPrerelease(version)) {
            version = version.replace('^', '');
            let newVersion = `^${semver.major(version)}.${semver.minor(version)}.${semver.patch(version)}`;
            console.log(`${data.name}: Graduating ${peerDep} to ${newVersion}`);
            data.peerDependencies[peerDep] = newVersion;
          }
        }
      }

      fs.writeFileSync(file, JSON.stringify(data, null, 2));
    });
  });
}

/** working */
function packageLint() {
  glob("components/*/package.json", (err, files) => {
    if (err) {
      console.error(err)
      return
    }

    files.forEach((file) => {
      let data = JSON.parse(fs.readFileSync(file, "utf8"))

      if (!data.license) {
        data.license = "Apache-2.0"
        console.log(`${data.name}: Adding license=${data.license}`)
      }

      if (!data.publishConfig || data.publishConfig.access != "public") {
        console.log(`${data.name}: Adding publishConfig.access=public`)
        data.publishConfig = data.publishConfig || {}
        data.publishConfig.access = "public"
      }

      if (!data.repository) {
        console.error(`${data.name}: missing repository field!`)
      } else if (!data.repository.directory) {
        data.repository.directory = "components/" + data.name.split("/").pop()
        console.log(
          `${data.name}: Adding missing repository.directory=${data.repository.directory}`
        )
      }
      if (data.author === "") {
        console.log(`${data.name}: author field empty, deleting`)
        delete data.author
      }

      if (!data.homepage) {
        data.homepage = "https://opensource.adobe.com/spectrum-css/"
        console.log(`${data.name}: Adding homepage=${data.homepage}`)
      }

      fs.writeFileSync(file, JSON.stringify(data, null, 2))
    })
  })
}

// working
async function readmeLint() {
  const packagesDir = "./components"

  const components = (await fsp.readdir(packagesDir, { withFileTypes: true }))
    .filter((dirent) => dirent.isDirectory() || dirent.isSymbolicLink())
    .map((dirent) => path.join(packagesDir, dirent.name))

  await Promise.all(
    components.map(async (component) => {
      const hasReadme = await fsp
        .access(path.join(component, "README.md"))
        .then((v) => true)
        .catch((e) => false)

      const pack = await readPackage(component)
      if (!hasReadme) {
        console.log(`${pack.name}: writing README...`)
        const content = `# ${pack.name}
  > ${pack.description}
  
  This package is part of the [Spectrum CSS project](https://github.com/adobe/spectrum-css).
  
  See the [Spectrum CSS documentation](https://opensource.adobe.com/spectrum-css/) and [Spectrum CSS on GitHub](https://github.com/adobe/spectrum-css) for details.
  `

        await fsp.writeFile(path.join(component, "README.md"), content)
      }
    })
  )
}

function prepareSite_clean() {
  return del("dist-site/")
}

async function prepareSite_components() {
  try {
    glob("dist/components/**/*", (err, files) => {
      if (err) {
        console.error("Error in prepareSite_components " + err)
        return
      }

      files.forEach((file) => {
        const destPath = path.join("dist-site", file.replace("dist/", ""))
        fs.copyFile(file, destPath, (error) => {
          if (error) {
            console.error("Error in prepareSite_components " + error)
          }
        })
      })
    })
    console.log("prepare site components done")
  } catch (e) {
    throw new Error(e)
  }
}

function prepareSite_docs() {
  try {
    glob("dist/docs/**/*", (err, files) => {
      if (err) {
        console.error("Error in prepareSite_docs " + err)
        return
      }

      files.forEach((file) => {
        fs.readFile(file, "utf8", (err, contents) => {
          if (err) {
            console.error("Error in prepareSite_docs " + err)
            return
          }

          const updatedContents = contents.replace(
            "../components/",
            "components/"
          )

          const destPath = path.join("dist-site", file.replace("dist/", ""))
          fs.writeFile(destPath, updatedContents, "utf8", (error) => {
            if (error) {
              console.error("Error in prepareSite_docs " + error)
            }
          })
        })
      })
    })
    console.log("prepare site docs done")
  } catch (e) {
    throw new Error(e)
  }
}

const prepareSite = async () => {
  try {
    await prepareSite_clean()
    await Promise.all([
      prepareSite_docs(),
      prepareSite_components(),
      site.copySiteResources(),
    ])
  } catch (e) {
    throw new Error("Error in prepareSite" + e)
  }
}

const version = () => {
  return checkPeerDependencies().then(() => {
    return builder.build();
  });
};

const dev = () => {
  console.log('Inside dev')
  return Promise.all([site.copySiteResources(), builder.dev()]);
};

const devHeavy = () => {
  console.log('Inside DevHeavy')
  return Promise.all([site.copySiteResources(), builder.devHeavy()]);
};

const watchRelaunch = () => {
  process.env['BROWSERSYNC_OPEN'] = true;
  return exports.watch();
};


module.exports = {
  prepareSite,
  graduatePeerDeps,
  readmeLint,
  packageLint,
  checkPeerDependencies,
  version,
  dev,
  devHeavy,
  'watch-relaunch': watchRelaunch,
  buildDocs: builder.buildDocs,
  releaseBundles,
  prepare: site.copySiteResources
};

if (process.argv[2] === 'dev') {
  dev();
}
