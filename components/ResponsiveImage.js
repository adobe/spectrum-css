import styles from './css/responsiveImage.scss';
import classNames from 'classnames';

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
