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
import Rule from '@react/react-spectrum/Rule';
import classNames from 'classnames';
import styles from './css/subHeader.scss';

class SectionHeader extends React.Component {

  render() {
    let title = this.props.title ? this.props.title : 'Missing title';

    return (
        <div className={classNames('afg-row',styles.headerContainer)}>
            <div className={classNames('afg-col-xs-12')}>
            <h2 id={this.props.title.split(" ").join("-")} className={classNames('spectrum-Heading3',styles.sectionHeader, styles.header)}>
              {this.props.title}
              <span className={styles.headingAnchor}>
                 <a className={classNames(`spectrum-Link`, styles.anchor)} href={'#' + title.split(" ").join("-")} aria-label="§">#</a> {this.props.id  && process.env.NODE_ENV != 'production' ? <span className="spectrum-Body"><a className={classNames("spectrum-Link",styles.editLink)} tabIndex="-1" target="_blank" href={`https://app.contentful.com/spaces/${this.props.space}/entries/${this.props.id}`}>Edit</a></span>:undefined}
              </span>
            </h2>
            <Rule/>
            </div>
          </div>
    );
  }
}

export default SectionHeader
