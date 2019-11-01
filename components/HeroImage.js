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

import ResponsiveImage from './ResponsiveImage';
import classNames from 'classnames';
import styles from './css/heroImage.scss';

const HeroImage = (props) => (

  <div className={classNames('afg-row', styles.row)}>
    <div className={classNames('afg-col-xs-12 afg-col-sm-12', styles.heroImage)}>
      <div className={classNames(styles.heroContainer, styles[props.style])}>
      <ResponsiveImage
        alt={props.desktop.description}
        image={props.desktop.file}
        imageMobile={props.mobile ? props.mobile.file : undefined}
      />
      </div>
    </div>
  </div>
)

export default HeroImage
