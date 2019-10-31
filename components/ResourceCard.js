import classNames from 'classnames';
import styles from './css/resourceCard.scss';

class ResourceCard extends React.Component {
  constructor(props) {
    super(props);
    // set default target for links to "_blank" unless passed as prop.
    this.linkTarget = (props.target) ? props.target : "_blank";
  }
  goToResource = (url) => {
    window.open(url, "_blank");
  }
  render () {
    const props = this.props;
    return (


        <a href={props.url} target={this.linkTarget} aria-label={props.clickEvent ? `Download ${props.componentName} UI Kit`: undefined} className={styles.cardButton} tabIndex="0">
        <div className={styles.card} tabIndex="-1">
          <div>
            {
              props.type === 'XD' ? <img className={styles.xdImage} src={`${process.env.BACKEND_URL}/static/thumbnail_xd@2x.png`}/> : undefined
            }
            {
              props.type === 'CSS' ? <img className={styles.cssImage} src={`${process.env.BACKEND_URL}/static/thumbnail_css@2x.png`}/> : undefined
            }
            {
              props.type === 'react' ? <img className={styles.reactImage} src={`${process.env.BACKEND_URL}/static/thumbnail_react@2x.png`}/> : undefined
            }
            {
              props.type === 'Spectrum' ? <svg className={styles.spectrumImage} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 66"><path fill="#e1251b" d="M37.5 19l12.1 28.8V19H37.5zM17 19v28.8L29.1 19H17zm11 23h5.5l2.4 5.9h5l-7.8-18.3L28 42z" /></svg> : undefined
            }
            {
              props.type === 'GitHub' ? <svg className={styles.githubImage} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 66"><path d="M51.95 33.48C51.95 23.27 43.67 15 33.47 15S15 23.28 15 33.48c0 7.89 5.01 14.9 12.46 17.47.53-.27.88-.79.95-1.38 0-1.02-.02-3.63-.02-3.63-.64.1-1.29.14-1.95.14a4.183 4.183 0 01-4.23-2.85 4.96 4.96 0 00-2.08-2.46c-.48-.31-.59-.67-.03-.77 2.55-.48 3.21 2.88 4.91 3.41 1.18.37 2.45.27 3.56-.28.16-.95.68-1.81 1.47-2.38-4.34-.41-6.91-1.91-8.24-4.32l-.14-.27-.33-.76-.1-.27c-.43-1.35-.63-2.77-.6-4.18a7.13 7.13 0 012.04-5.3 7.35 7.35 0 01.31-5.34s1.88-.39 5.42 2.14c1.92-.82 7.05-.89 9.48-.18 1.49-.98 4.21-2.37 5.31-1.98.3.48.94 1.87.39 4.92a8.573 8.573 0 012.32 6.12c0 1.28-.16 2.56-.47 3.8l-.16.54s-.09.26-.19.5l-.12.27c-1.29 2.81-3.92 3.86-8.19 4.3 1.38.87 1.78 1.95 1.78 4.89 0 2.94-.04 3.33-.03 4.01.08.57.42 1.07.92 1.35a18.52 18.52 0 0012.51-17.51z" /></svg> : undefined
            }
            {
              props.type === 'NPM' ? <svg className={styles.npmImage} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 66 66" xmlSpace="preserve"><g id="layer1" transform="translate(8.305 24.74)"><path id="path4951" fill="#cb3837" d="M13.73 19.26V16.5H0V0h49.39v16.5h-24.7v2.76H13.73z" /><path id="path4949" fill="#fff" d="M22.02 16.5v-2.77h5.43V2.77H16.51V16.5h5.51z" /><path id="path4947" fill="#cb3837" d="M22.02 5.53h2.67v5.43h-2.67V5.53z" /><path id="path4945" fill="#fff" d="M8.2 13.73v-8.2h2.76v8.2h2.76V2.77H2.79v10.95H8.2z" /><path id="path2998" fill="#fff" d="M35.66 13.73v-8.2h2.76v8.2h2.76v-8.2h2.76v8.2h2.76V2.77H30.22v10.95h5.44z" /></g></svg> : undefined
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
