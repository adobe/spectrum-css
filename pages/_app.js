import React from 'react'
import App from 'next/app'
import Sidebar from '../components/Sidebar';
import Provider from '@react/react-spectrum/Provider';
import styles from '../css/main.scss';
import {withRouter, Router} from 'next/router';

import '@adobe/spectrum-css/dist/standalone/spectrum-light.css';

import classNames from 'classnames';
import {Helmet} from "react-helmet";
//import regeneratorRuntime from "regenerator-runtime";


class Layout extends React.Component {
  render () {
    const { children } = this.props
    return <div className={classNames('afg-container-fluid', styles.mainContainer)} style={{minHeight: '100vh', boxSizing: 'border-box'}}>{children}</div>
  }
}

class MyApp extends App {
  constructor(props) {
    super(props);
    this.state = {
      scale: 'medium'
    }
    Router.events.on('routeChangeComplete', () => {
      digitalData._set('page.pageInfo.pageName', arguments[0].pageProps.pageData.name);
      digitalData._set('page.pageInfo.siteSection', `${arguments[0].router.query.id} Page`);
      digitalData._set('page.pageInfo.language', 'en-US');
      digitalData._set('page.pageInfo.geoRegion', 'US');
      digitalData._set('page.pageInfo.legacyMarketSegment', 'com');
      _satellite.track('state', {digitalData: digitalData._snapshot()});
      console.log('======', digitalData._get('page.pageInfo.pageName'));
    });

  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }
  updateDimensions =() => {

      this.setState((state, props) => { return {
        scale: window.innerWidth < 768 ? 'large' : 'medium'
       }});
  }

  render () {
    const { Component, pageProps } = this.props
    //console.log(pageProps);
    return (

      <div>

        <Helmet>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport"/>
            <link rel="icon" type="image/x-icon" href={`${process.env.BACKEND_URL}/static/favicon.ico`} />
            <link type="text/css" rel="stylesheet" href="https://wwwimages2.adobe.com/etc/beagle/public/globalnav/adobe-globalnav/latest/adobe-globalnav.min.css"/>
              <script dangerouslySetInnerHTML={{
              __html: `
              window.marketingtech = {
                adobe: {
                  launch: {
                    property: 'global',
                    environment: '${process.env.analyticsEnv}'
                  },
                  target: false,
                  audienceManager: false
                }
              };
              `
            }}>
            </script>
            <script src="https://www.adobe.com/marketingtech/main.min.js"></script>
            <script dangerouslySetInnerHTML={{
              __html: `
                //dom is ready, window.onload fires later
                digitalData._set('page.pageInfo.siteSection', 'Spectrum Document Site Page');
                digitalData._set('page.pageInfo.template', 'default template');
                digitalData._set('page.pageInfo.language', 'en-US');
                digitalData._set('page.pageInfo.geoRegion', 'US');
                digitalData._set('page.pageInfo.issueDate', '2018-03-02');
                digitalData._set('page.pageInfo.breadCrumbs', ["Home"]);
                digitalData._set('page.pageInfo.legacyMarketSegment', 'com');
                digitalData._set('page.pageInfo.productName', 'Spectrum Design System');
              `
            }}>
            </script>
        </Helmet>
        <Provider theme="light" scale={this.state.scale} typekitId="uma8ayv">
          <div className={styles.flexContainer}>
          <Sidebar {...pageProps}/>
          <Layout>
            <Component {...pageProps}/>
          </Layout>
          </div>
        </Provider>
      </div>
    )
  }
}

export default withRouter(MyApp)
