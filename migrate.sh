#!/bin/bash

CWD=`pwd`

function arrlen() {
  arr=("$@")
  echo "${arr[@]}" | wc -w
}

npmignore='/dist/docs/'

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
    "@spectrum-css/component-builder": "0.0.0"
  }
}'

gulpfile="module.exports = require('@spectrum-css/component-builder');"

# components=$(ls components/)
components="accordion   checkbox    fieldlabel    rule      stepper
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
componentsWithoutDocs=()

buildFiles="index.css
index-diff.css
index-lg.css
index-vars.css
colorStops/light.css
colorStops/lightest.css
colorStops/dark.css
colorStops/darkest.css
multiStops/light.css
multiStops/lightest.css
multiStops/dark.css
multiStops/darkest.css"

oldCSSDir="/Users/lawdavis/repos/old-spectrum-css"

for package in $components; do
  echo "Processing $package..."
  # if [ -d "docs/$package" ]; then
  #   echo "$package has docs, let's migrate them"
  #   migratedPackages+=("$package")
  #   mkdir components/$package/docs
  #   mv docs/$package/* components/$package/docs/
  # else
  #   echo "$package does NOT have docs, why?"
  #   componentsWithoutDocs+=("$package")
  # fi

  # Set up package.json
  # echo "$packagejson" | sed "s/PACKAGE/$package/g" > $CWD/components/$package/package.json
  # echo "$gulpfile" > $CWD/components/$package/gulpfile.js

  # move yml
  # if [ -d components/$package/docs ]; then
  #   docCount=`ls -1 components/$package/docs | wc -l`
  #   # echo "Got me a nice lil doc folder for $package with $docCount items"
  #   if [ $docCount == "1" ]; then
  #     echo "Moving and renaming singular docs file..."
  #     mv components/$package/docs/*.yml components/$package/docs.yml
  #   fi

  #   if [ $docCount == "0" ]; then
  #     echo "Deleting empty docs folder..."
  #     rm -rf components/$package/docs/
  #   fi
  # fi

  # Combine docs?

  # Diff against old build
  # packageIdentical="1"
  # for buildFile in $buildFiles; do
  #   oldFile="$oldCSSDir/dist/components/$package/$buildFile"
  #   newFile="components/$package/dist/$buildFile"
  #   if [ -f $oldFile ]; then
  #     diff -b $oldFile $newFile > /dev/null

  #     if [ $? == "1" ]; then
  #       packageIdentical="0"
  #       echo "$newFile does not match!"
  #       diff -b $oldFile $newFile
  #       diff -b -y $oldFile $newFile | less
  #     fi
  #   fi
  # done
  # if [ $packageIdentical == "0" ]; then
  #   echo "$package is not identical! Please investigate."
  # fi

  # copy npmignore
  echo $npmignore > $CWD/components/$package/.npmignore
done

echo $migratedPackages

echo "Migrated: `arrlen "${migratedPackages[@]}"`"
echo "Missing docs: `arrlen "${componentsWithoutDocs[@]}"`"
