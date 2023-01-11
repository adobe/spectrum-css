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

/**
 * @description This is a helped method wih nodejs 
 * to copy files with folders from source to destination
 * @author Rajdeep
 */

const glob = require('glob')
const fs = require('fs');

function copyResources(srcDir, destDir) {
  // Use glob to get a list of all the files in the source directory
  glob(`${srcDir}`, (err, files) => {
    if (err) {
      // Handle the error
    }

    // Iterate over the list of files
    files.forEach((srcPath) => {
      // Construct the full path to the destination file
      const destPath = srcPath.replace(srcDir, destDir)

      // Check if the file is a directory
      fs.stat(srcPath, (error, stats) => {
        if (error) {
          // Handle the error
        }

        if (stats.isDirectory()) {
          // If the file is a directory, create it in the destination
          fs.mkdir(destPath, { recursive: true }, (er) => {
            if (er) {
              // Handle the error
            }
          })
        } else {
          // If the file is a regular file, copy it
          fs.copyFile(srcPath, destPath, (err1) => {
            if (err1) {
              // Handle the error
            }
          })
        }
      })
    })
  })
}

exports.copyResources = copyResources
