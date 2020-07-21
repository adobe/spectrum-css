pipeline {
    agent any
    environment {
        PATH = "/apps/java/latest/bin:/usr/bin/node:$PATH"
        SPECTRUM_GIT_REPO_PATH = "${BRANCH_NAME}/${GIT_PREVIOUS_SUCCESSFUL_COMMIT}/"
    }
    options {
        lock resource: 'Lock to one build at a time'
    }
    stages {
        stage('Show Environment') {
            steps {
                sh "env"
                sh "node --version"
                sh "npm --version"
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'echo "@spectrum:registry=https://artifactory.corp.adobe.com:443/artifactory/api/npm/npm-spectrum-release/" >> ~/.npmrc'
                sh 'echo "@a4u:registry=https://artifactory.corp.adobe.com:443/artifactory/api/npm/npm-a4u-release-local/" >> ~/.npmrc'
                // install npm dependencies
                sh "npm install"
            }
        }
        stage('Get Previous Successful Commit Images') {
          steps {
            script {
              env.MASTER_COMMIT_SHA = 
                sh (returnStdout: true, script: """
                  git ls-remote git@git.corp.adobe.com:Spectrum/spectrum-css.git main | awk '{ print \$1 }' | tr -d '\n'
                """)

              env.PARENT_COMMIT_SHA = 
                sh (returnStdout: true, script: """
                  git rev-parse \$GIT_COMMIT^ | tr -d '\n'
                """)
            }

            dir("spectrum-css-visual-reports") {
              git url: "git@git.corp.adobe.com:Spectrum/spectrum-css-visual-reports.git"
              script {
                // try to get the last previous successful git commit
                if (fileExists("$BRANCH_NAME/$PARENT_COMMIT_SHA")) {
                  env.UPDATED_SPECTRUM_GIT_REPO_PATH = 
                    sh (returnStdout: true, script: """
                      echo \$BRANCH_NAME/\$PARENT_COMMIT_SHA | tr -d '\n'
                    """)

                } else {
                  echo "Previous commit doesn't exist - comparing against HEAD at MASTER"

                  env.UPDATED_SPECTRUM_GIT_REPO_PATH = 
                    sh (returnStdout: true, script: """
                      echo main/\$MASTER_COMMIT_SHA | tr -d '\n'
                    """)                  
                }
                echo "$UPDATED_SPECTRUM_GIT_REPO_PATH/**"
                stash name: "previous-spectrum-css-visual-tests", includes: "$UPDATED_SPECTRUM_GIT_REPO_PATH/**"
              }
            }
          }
        }
        stage('Build Images') {
            steps {
                unstash "previous-spectrum-css-visual-tests"
                sh "mkdir -p backstop_data/bitmaps_reference"
                sh "mv $UPDATED_SPECTRUM_GIT_REPO_PATH/* backstop_data/bitmaps_reference"
                sh "gulp build"
                sh "gulp test"
            }
        }
        stage('Test Images') {
          steps {
            // move folders around because of how backstopjs gens its file and what jenkins expects as an html report is weird

            sh "mkdir backstop_data/html_report/bitmaps_reference"
            sh "mkdir backstop_data/html_report/bitmaps_test"
            
            sh "mv backstop_data/bitmaps_reference/* backstop_data/html_report/bitmaps_reference/"
            sh "mv backstop_data/bitmaps_test/* backstop_data/html_report/bitmaps_test/"

            sh ("""
            sed -i -e "s@../bitmaps_reference@bitmaps_reference@g" backstop_data/html_report/config.js
            """)

            sh ("""
            sed -i -e "s@../bitmaps_test@bitmaps_test@g" backstop_data/html_report/config.js
            """)

            publishHTML target: [
                  allowMissing: false,
                  alwaysLinkToLastBuild: false,
                  keepAll: true,
                  reportDir: 'backstop_data/html_report',
                  reportFiles: 'index.html',
                  reportName: 'Spectrum CSS Visual Regression Report'
                ]

            sh "mkdir -p $BRANCH_NAME/$GIT_COMMIT"
            sh "mv backstop_data/html_report/bitmaps_test/**/*.png $BRANCH_NAME/$GIT_COMMIT"
            sh "ls -al $BRANCH_NAME/$GIT_COMMIT"
            stash name: "spectrum-css-visual-tests", includes: "$BRANCH_NAME/$GIT_COMMIT/**", excludes: "**/failed_diff*"
          }
        }

        stage('Upload Results to git.corp') {
          steps {
            dir("spectrum-css-visual-reports") {
              unstash 'spectrum-css-visual-tests'
              sh "git status"
              sh "git add -A"
              sh ("""
                git commit -m "Visual report update"
                git push origin main
              """)
              deleteDir()
            }
          }
        }
    }
}