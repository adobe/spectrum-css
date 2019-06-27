#!/bin/bash

CWD=`pwd`

function arrlen() {
  arr=("$@")
  echo "${arr[@]}" | wc -w
}

packagejson='{
  "name": "@spectrum-css/PACKAGE",
  "version": "0.0.0",
  "description": "The Spectrum CSS PACKAGE component",
  "author": "",
  "license": "Apache-2.0",
  "repository": {
    "type": "git",
    "url": "https://github.com/adobe/spectrum-css.git"
  },
  "bugs": {
    "url": "https://github.com/adobe/spectrum-css/issues"
  },
  "scripts": {
    "build": "gulp"
  },
  "dependencies": {
    "@spectrum-css/vars": "0.0.0",
    "@spectrum-css/icons": "0.0.0"
  },
  "devDependencies": {
    "gulp": "^4.0.0",
    "@spectrum-css/build": "0.0.0"
  }
}'

gulpfile="module.exports = require('@spectrum-css/build');"

# packages=$(ls packages/)
packages="accordion   checkbox    fieldlabel    rule      stepper
actionbar   circleloader        search      table
actionmenu    coachmark   illustratedmessage  searchwithin    tabs
alert        inputgroup    sidenav     tags
asset     commons     label     slider      textfield
assetlist   link       toast
avatar        menu       toggle
banner      cyclebutton   miller        tooltip
barloader   decoratedtextfield  page        treeview
breadcrumb    dialog      pagination     typography
button      dropdown    popover     splitbutton   underlay
buttongroup   dropindicator   quickaction   splitview   well
calendar    dropzone    radio     statuslight
card      fieldgroup    rating      steplist"
migratedPackages=()
packagesWithoutDocs=()

for package in $packages; do
  echo "Processing $package..."
  # if [ -d "docs/$package" ]; then
  #   echo "$package has docs, let's migrate them"
  #   migratedPackages+=("$package")
  #   mkdir packages/$package/docs
  #   mv docs/$package/* packages/$package/docs/
  # else
  #   echo "$package does NOT have docs, why?"
  #   packagesWithoutDocs+=("$package")
  # fi

  # Set up package.json
  # echo "$packagejson" | sed "s/PACKAGE/$package/g" > $CWD/packages/$package/package.json
  echo "$gulpfile" > $CWD/packages/$package/gulpfile.js

  # move yml
  # if [ -d packages/$package/docs ]; then
  #   docCount=`ls -1 packages/$package/docs | wc -l`
  #   # echo "Got me a nice lil doc folder for $package with $docCount items"
  #   if [ $docCount == "1" ]; then
  #     echo "Moving and renaming singular docs file..."
  #     mv packages/$package/docs/*.yml packages/$package/docs.yml
  #   fi

  #   if [ $docCount == "0" ]; then
  #     echo "Deleting empty docs folder..."
  #     rm -rf packages/$package/docs/
  #   fi
  # fi

  # Remove commons includes
done

echo $migratedPackages

echo "Migrated: `arrlen "${migratedPackages[@]}"`"
echo "Missing docs: `arrlen "${packagesWithoutDocs[@]}"`"
