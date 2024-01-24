/*!
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
const fs = require("fs");
const path = require("path");

const browserSync = require("browser-sync");
const chokidar = require('chokidar');

const {
    runComponentTask,
    buildPackage,
    buildPackages,
    buildPage,
    buildPages,
    buildFreshResources,
} = require("./builder.js");

require("colors");

const rootPath = path.join(__dirname, "../..");
const sitePath = path.join(__dirname, "..");
const componentPath = path.join(rootPath, "components");
const destPath = path.join(sitePath, "dist");

const watcher = async function (paths, changeTasks, cleanTasks = undefined) {
    if (!cleanTasks) cleanTasks = changeTasks;
    return chokidar.watch(paths, {
        ignoreInitial: true,
    })
        .on('add', async (newPath) => {
            console.log(`File ${path.relative(rootPath, newPath).yellow} has been added.`);
            if (typeof changeTasks === "function") {
                await changeTasks(changedPath);
            }
            return browserSync.reload();
        })
        .on('change', async (changedPath) => {
            console.log(`File ${path.relative(rootPath, changedPath).yellow} changed.`);
            if (typeof changeTasks === "function") {
                await changeTasks(changedPath);
            }
            return browserSync.reload();
        })
        .on('unlink', async (removedPath) => {
            log(`File ${path.relative(rootPath, removedPath).yellow} has been removed.`);
            if (typeof cleanTasks === "function") {
                await cleanTasks(changedPath);
            }
            return browserSync.reload();
        });
};

const watch = function () {
    // This is a list of watchers that we need to close when the server is closed
    const watches = [];

    // Start the server
    const server = browserSync({
        cwd: destPath,
        startPath: "index.html",
        server: destPath,
        notify: process.env.BROWSERSYNC_NOTIFY === "true" ? true : false,
        open: process.env.BROWSERSYNC_OPEN !== "true" ? false : true,
        port: process.env.BROWSERSYNC_PORT ?? 3000,
        https: true,
        watchEvents: ["add", "change", "unlink"],
    });

    // Watch the commons CSS so we can rebuild components that depend on it
    watches.push(
        watcher(
            [`${componentPath}/commons/*.css`],
            () => runComponentTask(["actionbutton", "button", "closebutton", "popover"]),
        )
    );

    fs.readdirSync(componentPath, { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory() || dirent.isSymbolicLink())
        .map((dirent) => {
            const packageDir = path.join(componentPath, dirent.name);

            watches.push(
                watcher(
                    [
                        `${packageDir}/*.css`,
                        `${packageDir}/themes/*.css`,
                    ],
                    () => runComponentTask([dirent.name]),
                )
            );
        });

    watches.push(
        watcher([`${componentPath}/*/metadata/*.yml`], (changedPath) => {
            const foldername = path.relative(componentPath, path.dirname(changedPath)).split(path.sep).shift();
            return buildPackage(`@spectrum-css/${foldername}`);
        }),
        watcher([`${sitePath}/*.pug`], buildPage),
        /* This watches includes and refreshes the build when they change */
        watcher([
            `${sitePath}/includes/*.pug`,
            `${sitePath}/templates/*.pug`,
        ], () => Promise.all([
            buildPages(),
            buildPackages(),
        ])),
        watcher([
            `${sitePath}/resources/css/*.css`,
            `${sitePath}/resources/js/*.js`,
        ], buildFreshResources)
    );

    server.cleanup = () => {
        server.exit();
        watches.forEach((watcher) => watcher.close());
    };
};

/* Default export is the watch function */
module.exports = exports.watch = watch;
