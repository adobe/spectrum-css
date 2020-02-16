#!/bin/bash

set -e

if [ "$TRAVIS_PULL_REQUEST" != "false" ]; then
    echo !!!! BRANCH_NAME: $BRANCH_NAME
    echo !!!! TEST_RESULT_URL: $TEST_RESULT_URL
    echo !!!! TRAVIS_PULL_REQUEST: $TRAVIS_PULL_REQUEST
fi
