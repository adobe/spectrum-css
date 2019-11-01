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
import SectionHeader from './SectionHeader';
import classNames from 'classnames';
import styles from './css/section.scss';

class Section extends React.Component {
  getClassName = (type) => {
    if (type === 'Internal and public') {
      return styles.both
    } else if (type === 'Public only') {
      return styles.public
    } else if (type==='Internal only') {
      return styles.internal
    } else {
      return styles.notSet
    }
  }
  render() {
    return (
        <div className={classNames(styles.section, this.props.title.split(' ').join(''))}>
          {process.env.build === 'both' ?
            <div className={classNames(this.getClassName(this.props.visibility),styles.stageHelper)}></div>
          : undefined}
          <SectionHeader title={`${this.props.title}`} id={this.props.id} space={this.props.space}/>
          {
            this.props.text ?
            <div className={classNames('afg-row', styles.introRow)}>
              <div className={classNames('afg-col-xs-12')}>
                <div className={styles.sectionIntro}><Markdown source={this.props.text} /></div>
              </div>
            </div>
            : undefined
          }

          {this.props.children}
        </div>

    );
  }
}

export default Section
