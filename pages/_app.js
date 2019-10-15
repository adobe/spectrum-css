import React from 'react'
import App from 'next/app'
import { Helmet } from "react-helmet";
import Sidebar from '../components/Sidebar';
import Provider from '@react/react-spectrum/Provider';
import Select from '@react/react-spectrum/Select';
import FieldLabel from '@react/react-spectrum/FieldLabel';
import classNames from 'classnames';
import styles from '../css/main.scss';
import { withRouter, Router } from 'next/router';

import '@adobe/spectrum-css/dist/vars/spectrum-dark-unique.css';
import '@adobe/spectrum-css/dist/vars/spectrum-darkest-unique.css';
import '@adobe/spectrum-css/dist/vars/spectrum-light-unique.css';
import '@adobe/spectrum-css/dist/vars/spectrum-lightest-unique.css';
import '@adobe/spectrum-css/dist/vars/spectrum-large-unique.css';
import '@adobe/spectrum-css/dist/vars/spectrum-medium-unique.css';
import '@adobe/spectrum-css/dist/vars/spectrum-global-unique.css';

//import regeneratorRuntime from "regenerator-runtime";

class Layout extends React.Component {
  render() {
    const {children} = this.props
    return <div className={classNames('afg-container-fluid', 'site-mainContainer')}
                style={{minHeight: '100vh', boxSizing: 'border-box'}}>{children}</div>
  }
}

class MyApp extends App {
  constructor(props) {
    super(props);
    this.scaleSelector = React.createRef();
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
      this.scaleSelector.current.state.value = window.innerWidth < 768 ? 'large' : 'medium';
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

    // calling SVG injector after script has been loaded
  // solution: https://github.com/nfl/react-helmet/issues/146#issuecomment-271552211
  handleScriptInject = ({ scriptTags }) => {
    if (scriptTags) {
      const scriptTag = scriptTags[0];
      scriptTag.onload = this.handleOnLoad;
    }
  }

  handleOnLoad = () => {
    window.onload = loadIcons('/static/images/svg/spectrum-css-icons.svg', function (err, svg) {
      if (err) {
        console.error('Everything failed because ' + error);
      }
    });
  }

  render() {
    const {Component, pageProps} = this.props
    //console.log(pageProps);
    return (

      <div>
        {/* SVG iconfile loadscript */}
        <Helmet
            script={[{ src: '/static/javascript/loadicons/index.js' }]}
            onChangeClientState={(newState, addedTags) => this.handleScriptInject(addedTags)}>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport"/>
          <link rel="icon" type="image/x-icon" href={`${process.env.BACKEND_URL}/static/favicon.ico`}/>
          <link type="text/css" rel="stylesheet"
                href="https://wwwimages2.adobe.com/etc/beagle/public/globalnav/adobe-globalnav/latest/adobe-globalnav.min.css"/>
        </Helmet>
        <Provider theme={this.state.theme} scale={this.state.scale} typekitId="uma8ayv">
          <div className={'flexContainer'}>
            <Sidebar {...pageProps}/>
            <Layout>
              <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: 0 }}>
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
                    flexible
                  />
                </FieldLabel>
                <FieldLabel label="Scale" labelFor="scale-selector" position="left">
                  <Select
                    ref={this.scaleSelector}
                    id="scale-selector"
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
                    flexible
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
