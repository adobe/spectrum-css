#!/bin/bash
if ! [ -x "$(command -v prettier)" ]; then
  echo 'Please install prettier with: npm install -g prettier' >&2
  exit 1
fi

CWD=`pwd`

function arrlen() {
  arr=("$@")
  echo "${arr[@]}" | wc -w
}

# Install the old spectrum css
mkdir -p ~/tmp
cd ~/tmp
npm install @adobe/spectrum-css@2.13.0
rm -rf ~/tmp/old-spectrum-css
mv ~/tmp/node_modules/@adobe/spectrum-css ~/tmp/old-spectrum-css
cd $CWD

# components=$(ls components/)

# Ignores commons, other new components
components="accordion   checkbox    fieldlabel    divider      stepper
actionbar   circleloader        search      table
actionmenu    coachmark   illustratedmessage  searchwithin    tabs
alert        inputgroup    sidenav     tags
asset          label     slider      textfield
assetlist   link       toast   icon
avatar        menu       toggle
banner      cyclebutton   miller        tooltip
barloader   decoratedtextfield  page        treeview
breadcrumb    dialog      pagination     typography
button      picker    popover     splitbutton   underlay
buttongroup   dropindicator   quickaction   splitview   well
calendar    dropzone    radio     statuslight
card      fieldgroup    rating      steplist"

# Full set of files
# buildFiles="index.css
# index-diff.css
# index-lg.css
# index-vars.css
# colorStops/light.css
# colorStops/lightest.css
# colorStops/dark.css
# colorStops/darkest.css
# multiStops/light.css
# multiStops/lightest.css
# multiStops/dark.css
# multiStops/darkest.css"

# Minimal set of files, since prettier is slow
buildFiles="index.css
index-vars.css
colorStops/light.css
multiStops/light.css"

newCSSDir="."
oldCSSDir="~/tmp/old-spectrum-css"

for package in $components; do
  echo "Processing $package..."

  # Diff against old build
  packageIdentical="1"
  for buildFile in $buildFiles; do
    oldFile="$oldCSSDir/dist/components/$package/$buildFile"
    newFile="$newCSSDir/dist/components/$package/$buildFile"
    if [ -f "$oldFile" ]; then
      prettyOldFile=$(prettier "$oldFile")
      prettyNewFile=$(prettier "$newFile")

      # Apply prettier to both files
      diff -b <(echo "$prettyOldFile") <(echo "$prettyNewFile") > /dev/null

      if [ $? == "1" ]; then
        packageIdentical="0"
        echo "$newFile does not match!"
        # git --no-pager diff --color-moved-ws=ignore-space-change -b $oldFile $newFile
        diff -b -y -W $(( $(tput cols) - 2 )) <(echo "$prettyOldFile") <(echo "$prettyNewFile") | less
      fi
    else
      echo "$oldFile doesn't exist"
    fi
  done
  if [ $packageIdentical == "0" ]; then
    echo "$package is not identical! Please investigate."
  fi
done

echo "Checked: `arrlen "${components[@]}"` components"
