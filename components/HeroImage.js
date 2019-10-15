import styles from './css/heroImage.scss';
import classNames from 'classnames';
import ResponsiveImage from './ResponsiveImage';

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
