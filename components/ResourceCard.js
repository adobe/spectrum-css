import styles from './css/resourceCard.scss';
import classNames from 'classnames';


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


        <button aria-label={props.clickEvent ? `Download ${props.componentName} UI Kit`: undefined} className={styles.cardButton} tabindex="0" onClick={props.clickEvent ? (e)=>{props.clickEvent()}:() => this.goToResource(props.url)} >
        <div className={styles.card} tabindex="-1">
          <div>
            {
              props.type === 'XD' ? <img src="/static/thumbnail_xd@2x.png"/> : undefined
            }
            {
              props.type === 'CSS' ? <img src="/static/thumbnail_css@2x.png"/> : undefined
            }
            {
              props.type === 'react' ? <img src="/static/thumbnail_react@2x.png"/> : undefined
            }
            {
              props.type === 'Spectrum' ? <img src="/static/thumbnail_spectrum.svg"/> : undefined
            }
            {
              props.type === 'GitHub' ? <img src="/static/thumbnail_github.svg"/> : undefined
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
        </button>

    )

  }
}



export default ResourceCard
