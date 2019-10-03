import React from 'react'
import App from 'next/app'
import Sidebar from '../components/Sidebar';
import Provider from '@react/react-spectrum/Provider';
import Select from '@react/react-spectrum/Select';
import FieldLabel from '@react/react-spectrum/FieldLabel';
import styles from '../css/main.scss';
import {withRouter, Router} from 'next/router';

import '@adobe/spectrum-css/dist/spectrum-core.css';
import '@adobe/spectrum-css/dist/spectrum-lightest.css';
import '@adobe/spectrum-css/dist/spectrum-dark.css';
import '@adobe/spectrum-css/dist/spectrum-darkest.css';
import '@adobe/spectrum-css/dist/spectrum-light.css';

import classNames from 'classnames';
import {Helmet} from "react-helmet";

//import regeneratorRuntime from "regenerator-runtime";


class Layout extends React.Component {
  render() {
    const {children} = this.props
    return <div className={classNames('afg-container-fluid', styles.mainContainer)}
                style={{minHeight: '100vh', boxSizing: 'border-box'}}>{children}</div>
  }
}

class MyApp extends App {
  constructor(props) {
    super(props);
    this.state = {
      scale: 'medium',
      theme: 'light'
    };
    Router.events.on('routeChangeComplete', () => {
      digitalData._set('page.pageInfo.siteSection', `${arguments[0].router.query.id} Page`);
      digitalData._set('page.pageInfo.language', 'en-US');
      digitalData._set('page.pageInfo.geoRegion', 'US');
      digitalData._set('page.pageInfo.legacyMarketSegment', 'com');
      _satellite.track('state', {digitalData: digitalData._snapshot()});
    });
  }

  componentDidMount() {
    this.updateDimensions();
    this.updateTheme();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  updateDimensions = () => {
    this.setState((state, props) => {
      return {
        scale: window.innerWidth < 768 ? 'large' : 'medium'
      }
    });
  }
  updateTheme = (e = 'light') => {
    this.setState((state, props) => {
      return {
        theme: e
      }
    })
  }

  render() {
    const {Component, pageProps} = this.props
    //console.log(pageProps);
    return (

      <div className={`spectrum--${this.state.theme}`}>

        <Helmet>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport"/>
          <link rel="icon" type="image/x-icon" href={`${process.env.BACKEND_URL}/static/favicon.ico`}/>
          <link type="text/css" rel="stylesheet"
                href="https://wwwimages2.adobe.com/etc/beagle/public/globalnav/adobe-globalnav/latest/adobe-globalnav.min.css"/>
        </Helmet>
        <Provider theme={this.state.theme} scale={this.state.scale} typekitId="uma8ayv">
          <div className={styles.flexContainer}>
            <Sidebar {...pageProps}/>
            <Layout>
              <div style={{display: 'flex'}}>
                <FieldLabel label="Theme" labelFor="theme-selector" position="left">
                  <Select
                    onChange={this.updateTheme}
                    id="theme-selector"
                    aria-label="Theme selector"
                    options={[
                      {label: 'Lightest', value: 'lightest'},
                      {label: 'Light', value: 'light'},
                      {label: 'Dark', value: 'dark'},
                      {label: 'Darkest', value: 'darkest'}
                    ]}
                    defaultValue="light"
                    quiet
                    style={{marginRight: '37px'}}
                  />
                </FieldLabel>
                <FieldLabel label="Scale" labelFor="theme-selector" position="left">
                  <Select
                    onChange={e => {
                      this.setState((state, props) => {
                        return {
                          scale: e
                        }
                      })
                      console.log(e);
                    }
                    }
                    aria-label="Scale selector"
                    options={[
                      {label: 'Medium', value: 'medium'},
                      {label: 'Large', value: 'large'}
                    ]}
                    quiet
                  />
                </FieldLabel>
              </div>
              <Component {...pageProps}/>
            </Layout>
          </div>
        </Provider>
      </div>
    )
  }
}

export default withRouter(MyApp)
