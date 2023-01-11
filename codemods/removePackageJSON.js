/**
 * @description This script uses the async and await keywords to handle asynchronous tasks in a more readable and structured way. 
 * Instead of using forEach, map and promise.all are used in the script, that way the script is able to perform tasks 
 * concurrently which reduces the time needed to iterate all the package.json files. 
 * @author Rajdeep
 */


const fs = require("fs");
const path = require("path");

const removeGulpPackages = async() => {
  try {
    // Getting all package.json files in the current project
    const packagePaths = await getPackagePaths();
    // Using Promise.all to perform the tasks concurrently
    const packageJsons = await Promise.all(packagePaths.map(async (filePath) => {
      return {
        filePath, 
        packageJson: JSON.parse(await fs.promises.readFile(filePath, "utf8"))
      }
    }))
    // Iterating through each package.json
    packageJsons.forEach(async({filePath, packageJson}) => {
      let packageChanged = false;
      // Checking the dependencies, devDependencies and peerDependencies fields for gulp and gulp-related packages
      const fieldName = ['dependencies', 'devDependencies', 'peerDependencies'];
      fieldName.forEach(field => {
        if(packageJson[field]) {
          Object.keys(packageJson[field]).forEach(packageName => {
            if (packageName.indexOf("gulp") !== -1 || packageName.indexOf("gulpplugin") !== -1) {
              console.log(`Removing package ${packageName} from ${filePath}`);
              delete packageJson[field][packageName];
              packageChanged = true;
            }
          });
        }
      });
      if (packageChanged) {
        // Re-writing the package.json file
        await fs.promises.writeFile(filePath, JSON.stringify(packageJson, null, 2), "utf8");
      }
    });
  } catch (error) {
    console.error(`An error occurred: ${error}`);
  }
}

const getPackagePaths = async () => {
  const rootPath = process.cwd();
  // Searching the current directory recursively for package.json files
  return searchForFiles(rootPath, "package.json");
}

const searchForFiles = async (dir, fileName) => {
  let results = [];
  // Reading the contents of the directory
  const files = await fs.promises.readdir(dir);
  // Using map to perform the tasks concurrently
  const stats = await Promise.all(files.map(async (file) => {
    const filePath = path.join(dir, file);
    return {
      filePath, 
      stat: await fs.promises.lstat(filePath)
    }
  }));
  stats.forEach( async ({filePath, stat}) => {
    // If the file is a directory, recursively searching its contents
    if (stat.isDirectory()) {
      results = results.concat(await searchForFiles(filePath, fileName));
    } else if (path.basename(filePath) === fileName) {
      // If the file is a package.json, adding it to the results
      results.push(filePath);
    }
  });
  return results;
}

removeGulpPackages();