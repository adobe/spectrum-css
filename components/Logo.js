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

import Link from "next/link";
import classNames from "classnames";
import styles from "./css/logo.scss";
import { withRouter } from "next/router";

class Logo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Link href="/" as={`${process.env.BACKEND_URL}/`}>
        <a className={styles.headerLink}>
          <div className={styles.logoContainer} tabIndex="-1">

          <div className={styles.title} >

            <img
              className={styles.svgLogo}
              src={`${process.env.BACKEND_URL}/static/adobe_logo-2.svg`}
              alt="Adobe Logo"
              className={styles.logo}
            />
            <div>
              <h2
                className={classNames(
                  styles.titleText,
                  "spectrum-Site-title",
                  "spectrum-Heading3"
                )}
              >
                Spectrum CSS
              </h2>
              {process.env.build === "internal" ||
              process.env.build === "both" ? (
                <div className={styles.internal}>ADOBE INTERNAL</div>
              ) : (
                undefined
              )}
            </div>
            </div>
          </div>
        </a>
      </Link>
    );
  }
}

export default withRouter(Logo);
