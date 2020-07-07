#!/bin/bash

set -e

# Only upload test result when the job is triggered by pull request
if [ "$TRAVIS_PULL_REQUEST" != "false" ]; then

    # # Generate the dynamic branch name with short commit hash and current timestamp
    # BRANCH_NAME=$(git rev-parse --short HEAD)-result-$(date +%Y-%m-%d_%H-%M-%S)

    # # Create the folder with the branch name and copy the result into it
    # mkdir -p $HOME/temp/$BRANCH_NAME && cp -R backstop_data/* $HOME/temp/$BRANCH_NAME

    # # Move the spectrum-css build dist folder into the branch folder
    # mv dist/ $HOME/temp/$BRANCH_NAME

    # # Create github action folder and copy the action file into it
    # mkdir -p $HOME/temp/.github/workflows/ && cp backstop_data/push.yml $HOME/temp/.github/workflows/

    # cd $HOME/temp

    # git init .

    # git checkout --orphan $BRANCH_NAME

    # git add -A .

    # git commit -q -m "chore: deploy ${TRAVIS_REPO_SLUG} VR result to github.com/adobe/spectrum-css-vr-results.git:${BRANCH_NAME}"

    # git show --stat-count=10 HEAD

    # git remote add origin https://x-access-token:$VR_RESULT_PUBLISH_GITHUB_TOKEN@github.com/adobe/spectrum-css-vr-results.git

    # git push origin $BRANCH_NAME

    # TEST_RESULT_URL=http://opensource.adobe.com/spectrum-css-vr-results/$BRANCH_NAME/html_report/

    # DEV_SITE_URL=http://opensource.adobe.com/spectrum-css-vr-results/$BRANCH_NAME/dist/docs/

    # echo Result: $TEST_RESULT_URL
    # echo Dev Site: $DEV_SITE_URL

    # curl -H "Authorization: token ${VR_RESULT_PUBLISH_GITHUB_TOKEN}" \
    # -X POST -d "{\"body\": \"Test result: ${TEST_RESULT_URL}\n\nDev Site: ${DEV_SITE_URL}\"}" \
    # "https://api.github.com/repos/adobe/spectrum-css/issues/${TRAVIS_PULL_REQUEST}/comments"

    echo "**** In deploy site script"
fi
