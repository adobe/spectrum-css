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

import classNames from 'classnames';
import styles from './css/responsiveImage.scss';

const ResponsiveImage= (props) => (

  <div
    className={classNames('responsiveImage', props.imageMobile ? styles.hasMobile : undefined, styles.responsiveImage, props.imageStyle ? styles[props.imageStyle]: undefined)}
    style={{"minHeight": props.minHeight ? (props.image.details.image.height/2) + 'px' : undefined}}
  >
    <img
      key={props.image.url}
      alt={props.alt === '[blank]' ? '':props.alt}
      className={classNames(styles.desktop, styles[props.sizeBy])}
      src={props.image.url + '?w=' + Math.round(props.image.details.image.width/2) + '&h=' + Math.round(props.image.details.image.height/2) }
      srcSet={props.image.url +' 2x'}/>
    { props.imageMobile ?
      <img
        alt={props.alt === '[blank]' ? '':props.alt}
        className={styles.mobile}
        key={props.imageMobile.url}
        src={props.imageMobile.url + '?w=' + Math.round(props.imageMobile.details.image.width/2) + '&h=' + Math.round(props.imageMobile.details.image.height/2) }
        srcSet={props.imageMobile.url +' 2x'}/>
        : undefined
    }
  </div>

)

export default ResponsiveImage
