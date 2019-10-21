import classNames from 'classnames';
import styles from './css/resourceCard.scss';

class ResourceCard extends React.Component {
  constructor(props) {
    super(props);
  }
  goToResource = (url) => {
    window.open(url, "_blank");
  }
  render () {
    const props = this.props;
    return (


        <a href={props.url} aria-label={props.clickEvent ? `Download ${props.componentName} UI Kit`: undefined} className={styles.cardButton} tabIndex="0">
        <div className={styles.card} tabIndex="-1">
          <div>
            {
              props.type === 'XD' ? <img src={`${process.env.BACKEND_URL}/static/thumbnail_xd@2x.png`}/> : undefined
            }
            {
              props.type === 'CSS' ? <img src={`${process.env.BACKEND_URL}/static/thumbnail_css@2x.png`}/> : undefined
            }
            {
              props.type === 'react' ? <img src={`${process.env.BACKEND_URL}/static/thumbnail_react@2x.png`}/> : undefined
            }
            {
              props.type === 'Spectrum' ? <img src={`${process.env.BACKEND_URL}/static/thumbnail_spectrum.svg`}/> : undefined
            }
            {
              props.type === 'GitHub' ? <img src={`${process.env.BACKEND_URL}/static/thumbnail_github.svg`}/> : undefined
            }
            {
              props.type === 'NPM' ? <img src={`${process.env.BACKEND_URL}/static/thumbnail_npm.svg`}/> : undefined
            }

          </div>
          <div className={styles.content}>
            <div className={classNames('spectrum-Body4', 'noMargin', styles.cardTitle)}>
              {props.title}
            </div>
            <div className={classNames('spectrum-Body5', 'noMargin', styles.cardSubTitle)}>
              {props.subTitle}
            </div>
          </div>
        </div>
        </a>

    )

  }
}



export default ResourceCard
