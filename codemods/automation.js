
/**
 * @description Codemod to update gulpfile.js to index.js and replace the build script from npm build gulp with node index.js
 * @author Rajdeep
 */


const fs = require('fs');
const path = require('path');

function renameGulpfile(dir) {
  const gulpfilePath = path.join(dir, 'gulpfile.js');
  const indexPath = path.join(dir, 'index.js');

  // Check if gulpfile.js exists
  if (fs.existsSync(gulpfilePath)) {
    // Rename gulpfile.js to index.js
    fs.renameSync(gulpfilePath, indexPath);

    // Read package.json
    const packageJsonPath = path.join(dir, 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

    // Update build script
    packageJson.scripts.build = 'node index.js';

    // Write package.json
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  }
}

function loopOverFolders(dir) {
  // Read the directory
  const files = fs.readdirSync(dir);

  // Loop over the files and directories
  // eslint-disable-next-line no-restricted-syntax
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    // If it's a directory, recurse into it
    if (stat.isDirectory()) {
      loopOverFolders(filePath);
    }
  }

  // After looping over all files and directories, rename gulpfile.js (if it exists)
  renameGulpfile(dir);
}

// Start the loop at the current working directory
loopOverFolders(process.cwd());
