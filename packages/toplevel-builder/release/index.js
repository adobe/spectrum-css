const fs = require('fs');
const inq = require('inquirer');
const semver = require('semver');
const gulp = require('gulp');
const del = require('del');

const exec = require('../lib/exec');
const dirs = require('../lib/dirs');

// The version we'll actually release
let releaseVersion = null;

function bumpVersion(cb) {
  function getPackage() {
    return JSON.parse(fs.readFileSync(`${dirs.cwd}/package.json`, 'utf8'));
  }

  function doVersionBump() {
    exec.command(`npm version --no-git-tag-version ${releaseVersion}`, cb);
  }

  let package = getPackage();

  // Potential versions
  let patchVersion = semver.inc(package.version, 'patch');
  let minorVersion = semver.inc(package.version, 'minor');
  let majorVersion = semver.inc(package.version, 'major');
  let preVersion = semver.inc(package.version, 'prerelease', 'alpha');
  let preMajorVersion = semver.inc(package.version, 'premajor', 'alpha');
  let preMinorVersion = semver.inc(package.version, 'preminor', 'alpha');
  let prePatchVersion = semver.inc(package.version, 'prepatch', 'alpha');

  let choices = [
    {
      name: 'patch - ' + patchVersion,
      value: patchVersion
    },
    {
      name: 'minor - ' + minorVersion,
      value: minorVersion
    },
    {
      name: 'major - ' + majorVersion,
      value: majorVersion
    }
  ];

  if (package.version.match('-alpha')) {
    choices = [
      {
        name: 'prerelease - ' + preVersion,
        value: preVersion
      },
      {
        name: 'release - ' + patchVersion,
        value: patchVersion
      }
    ];
  }

  choices = choices.concat([
    {
      name: 'prepatch - ' + prePatchVersion,
      value: prePatchVersion
    },
    {
      name: 'preminor - ' + preMinorVersion,
      value: preMinorVersion
    },
    {
      name: 'premajor - ' + preMajorVersion,
      value: preMajorVersion
    }
  ]);

  inq.prompt([{
    type: 'list',
    name: 'version',
    message: 'What version would you like?',
    choices: choices
  }])
  .then(function(res) {
    releaseVersion = res.version;

    doVersionBump();
  });
}

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
          `${dirs.packages}/icons/{medium,large,combined}/**`
        )
          .pipe(gulp.dest('icons/'));
      },
      function releaseBackwardsCompat_copyVars() {
        return gulp.src(
          `${dirs.packages}/vars/vars/**`
        )
          .pipe(gulp.dest('vars/'));
      }
    )
  )
);

// These tasks assume they're being run in the root and will copy and publish github pages
let ghPages = gulp.series(
  function getVersion(cb) {
    exec.command(`git describe --tags`, function(err, stdout, stderr) {
      if (err) {
         return cb(err);
      }
      releaseVersion = stdout.trim().substr(1);
      cb();
    });
  },
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
  exec.task('checkoutBranch', `git checkout -`)
);

// Stand in release task we probably won't use
let release = gulp.series(
  bumpVersion,
  // build happens automatically after the version bump with npm scripts
  function commitPackage(cb) {
    exec.command(`git commit package.json -m "v${releaseVersion}"`, cb);
  },
  function addTag(cb) {
    exec.command(`git tag v${releaseVersion}`, cb);
  },
  // push tag
  function pushTag(cb) {
    exec.command(`git push origin v${releaseVersion}`, cb);
  },
  // push current branch
  exec.task('pushBranch', 'git push'),
  // Backwards compat
  releaseBackwardsCompat,
  // publish to npm
  function npmPublish(cb) {
    let npmTag = '';
    if (releaseVersion.indexOf('alpha') !== -1) {
      npmTag = '--tag alpha';
    }
    exec.command(`npm publish ${npmTag}`, cb);
  },
  releaseBackwardsCompatCleanup
);

exports.ghPages = ghPages;
exports.releaseBackwardsCompat = releaseBackwardsCompat;
exports.releaseBackwardsCompatCleanup = releaseBackwardsCompatCleanup;
exports.release = release;

