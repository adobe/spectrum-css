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

import Markdown from './Markdown';
import React from 'react';
import Router from 'next/router';
import Rule from '@react/react-spectrum/Rule';
import classNames from 'classnames';
import styles from './css/subHeader.scss';

class SubHeader extends React.Component {

  render() {
    let title = this.props.title ? this.props.title : 'Missing title';
    const parentClass = this.props.className || '';

    return (
        <h3 className={classNames('spectrum-Heading4', styles.subHeader, styles.header, parentClass)} id={title.split(" ").join("-")}>
          {this.props.title}
          <span className={styles.headingAnchor}>
            <a className={classNames(`spectrum-Link`, styles.anchor)} href={'#' + title.split(" ").join("-")}>#</a>
          </span>
          {this.props.children}
        </h3>
    );
  }
}

export default SubHeader
