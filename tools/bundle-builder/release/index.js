const fsp = require('fs').promises;
const gulp = require('gulp');
const del = require('del');

const exec = require('../lib/exec');
const dirs = require('../lib/dirs');

function releaseBackwardsCompatCleanup() {
  return del([
    // Don't bother deleting dist/icons, we want it in gh-pages output
    'icons',
    'vars'
  ]);
};

let releaseBackwardsCompat = gulp.parallel(
  gulp.series(
    releaseBackwardsCompatCleanup,

    gulp.parallel(
      function releaseBackwardsCompat_copyUIIcons() {
        return gulp.src(
          `${dirs.components}/icons/{medium,large,combined}/**`
        )
          .pipe(gulp.dest('icons/'));
      },
      function releaseBackwardsCompat_copyVars() {
        return gulp.src(
          `${dirs.components}/vars/vars/**`
        )
          .pipe(gulp.dest('vars/'));
      }
    )
  )
);

// These tasks assume they're being run in the root and will copy and publish github pages
let stashRequired = false;
let releaseVersion = null;
let ghPages = gulp.series(
  async function getVersion(cb) {
    let pkg = JSON.parse(await fsp.readFile(`${dirs.cwd}/package.json`));
    releaseVersion = pkg.version;
  },
  function checkStatus(cb) {
    exec.command(`git diff --name-only`, function(err, stdout, stderr) {
      if (stdout) {
        stashRequired = true;
        exec.command('git stash', cb, { noPipe: true });
      }
      else {
        cb();
      }
    }, { noPipe: true });
  },
  // Stash changes (package.json is modified by Lerna)
  exec.task('checkoutPages', `git checkout gh-pages`),
  function copyPages(cb) {
    exec.command(`cp -r dist ${dirs.topLevel}/${releaseVersion}`, cb);
  },
  // todo: update gh-pages index files if not alpha release
  function addPages(cb) {
    exec.command(`git add ${dirs.topLevel}/${releaseVersion}`, cb);
  },
  function commitPages(cb) {
    exec.command(`git commit -q -m "Deploy version ${releaseVersion}"`, cb);
  },
  exec.task('pushPages', 'git push'),
  // Go back
  exec.task('checkoutBranch', `git checkout -`),
  // Pop changes to get Lerna's modification back
  function popStash(cb) {
    if (stashRequired) {
      exec.command(`git stash pop`, cb, { noPipe: true });
    }
    else {
      cb();
    }
  }
);

exports.ghPages = ghPages;
exports.releaseBackwardsCompat = releaseBackwardsCompat;
exports.releaseBackwardsCompatCleanup = releaseBackwardsCompatCleanup;
