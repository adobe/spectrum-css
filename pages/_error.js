/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import classNames from 'classnames';
import styles from '../css/error.scss';


import { withRouter } from 'next/router'

class ErrorPage extends React.Component {

  static propTypes() {
    return {
      errorCode: React.PropTypes.number.isRequired,
      url: React.PropTypes.string.isRequired
    }
  }

  static getInitialProps({res, xhr}) {
    const errorCode = res ? res.statusCode : (xhr ? xhr.status : null)
    return {errorCode}
  }

  render() {
    var response
    switch (this.props.errorCode) {
      case 200: // Also display a 404 if someone requests /_error explicitly
      case 404:
        response = (
          <div className={classNames('afg-row', styles.row)}>
            <div className={classNames("afg-col-xs-12", styles.container)}>
              <div><img src={`${process.env.BACKEND_URL}/static/404.svg`}/></div>
              <div className={classNames('spectrum-Heading1--quiet', styles.header)}>Error 404: page not found</div>
              <div className={classNames('spectrum-Body4', styles.body)}><em>The page isn't available. Try checking the
                URL or visit a different page.</em></div>
            </div>
          </div>
        )
        break
      case 500:
        response = (
          <div className={classNames('afg-row', styles.row)}>
            <div className={classNames("afg-col-xs-12", styles.container)}>
              <div><img src={`${process.env.BACKEND_URL}/static/404.svg`}/></div>
              <div className={classNames('spectrum-Heading1--quiet', styles.header)}>An error has occurred</div>
              <div className={classNames('spectrum-Body4', styles.body)}><em>Try reloading this page, and if the error
                persists, contact the Spectrum team to report it.</em></div>
            </div>
          </div>
        )
        break
      default:
        response = (
          <div className={classNames('afg-row', styles.row)}>
            <div className={classNames("afg-col-xs-12", styles.container)}>
              <div><img src={`${process.env.BACKEND_URL}/static/404.svg`}/></div>
              <div className={classNames('spectrum-Heading1--quiet', styles.header)}>Error 404: page not found</div>
              <div className={classNames('spectrum-Body4', styles.body)}><em>Try reloading this page, and if the error
                persists, contact the Spectrum team to report it.</em></div>
            </div>
          </div>
        )
    }

    return response
  }

}

export default withRouter(ErrorPage)
