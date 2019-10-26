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

import '../css/adcloud-flexbox-grid.min.css'
import '@adobe/spectrum-css/dist/vars/spectrum-dark.css';
import '@adobe/spectrum-css/dist/vars/spectrum-darkest.css';
import '@adobe/spectrum-css/dist/vars/spectrum-light.css';
import '@adobe/spectrum-css/dist/vars/spectrum-lightest.css';
import '@adobe/spectrum-css/dist/vars/spectrum-large.css';
import '@adobe/spectrum-css/dist/vars/spectrum-medium.css';
import '@adobe/spectrum-css/dist/vars/spectrum-global.css';

import { Router, withRouter } from 'next/router';

import App from 'next/app'
import FieldLabel from '@react/react-spectrum/FieldLabel';
import { Helmet } from "react-helmet";
import Provider from '@react/react-spectrum/Provider';
import React from 'react'
import Rule from '@react/react-spectrum/Rule';
import Select from '@react/react-spectrum/Select';
import Sidebar from '../components/Sidebar';
import classNames from 'classnames';
import styles from '../css/main.scss';

//import regeneratorRuntime from "regenerator-runtime";

class Layout extends React.Component {
  render() {
    const { children } = this.props
    return <div className={classNames('afg-container-fluid', 'site-mainContainer')}
      style={{ minHeight: '100vh', boxSizing: 'border-box' }}>{children}
      <Rule variant="small" style={{ marginTop: '32px' }} />
    </div>
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
      _satellite.track('state', { digitalData: digitalData._snapshot() });
    });
  }

  componentDidMount() {
    this.updateDimensions();
    this.updateTheme();
    const scaleMQL = window.matchMedia('(max-width: 768px)');
    scaleMQL.addListener(this.updateDimensions);
  }

  updateDimensions = (e) => {
    if (e) {
      this.setState((state, props) => {
        this.scaleSelector.current.state.value = e.currentTarget.matches ? 'large' : 'medium';
        return {
          scale: e.currentTarget.matches ? 'large' : 'medium'
        }
      });
    }
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
    window.onload = function () {
      loadIcons(`${process.env.BACKEND_URL}/static/images/svg/spectrum-icons.svg`, function (err, svg) {
        if (err) {
          console.error('Loading Workflow icons failed: ' + error);
        }
      });

      loadIcons(`${process.env.BACKEND_URL}/static/images/svg/spectrum-css-icons.svg`, function (err, svg) {
        if (err) {
          console.error('Loading UI icons failed: ' + error);
        }
      });
    }
  }

  render() {
    const { Component, pageProps } = this.props
    //console.log(pageProps);
    return (

      <div>
        {/* SVG iconfile loadscript */}
        <Helmet
          script={[{ src: `${process.env.BACKEND_URL}/static/javascript/loadicons/index.js` },
          { src: `${process.env.BACKEND_URL}/static/javascript/enhancement.js` }]}
          onChangeClientState={(newState, addedTags) => this.handleScriptInject(addedTags)}>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
          <link rel="icon" type="image/x-icon" href={`${process.env.BACKEND_URL}/static/favicon.ico`} />
          <link type="text/css" rel="stylesheet"
            href="https://wwwimages2.adobe.com/etc/beagle/public/globalnav/adobe-globalnav/latest/adobe-globalnav.min.css" />
        </Helmet>
        <Provider theme={this.state.theme} scale={this.state.scale} typekitId="uma8ayv">
          <div className={'flexContainer'}>
            <Sidebar {...pageProps} />
            <Layout>
              <div className="switcherContainer">
                <FieldLabel className="themeSelector" label="Theme" labelFor="theme-selector" position="left">
                  <Select
                    onChange={this.updateTheme}
                    id="theme-selector"
                    aria-label="Theme selector"
                    options={[
                      { label: 'Lightest', value: 'lightest' },
                      { label: 'Light', value: 'light' },
                      { label: 'Dark', value: 'dark' },
                      { label: 'Darkest', value: 'darkest' }
                    ]}
                    defaultValue="light"
                    quiet
                    flexible
                  />
                </FieldLabel>
                <FieldLabel className="scaleSelector" label="Scale" labelFor="scale-selector" position="left">
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
                      { label: 'Medium', value: 'medium' },
                      { label: 'Large', value: 'large' }
                    ]}
                    quiet
                    flexible
                  />
                </FieldLabel>
              </div>
              <Component {...pageProps} />
            </Layout>
          </div>
          <div class="spectrum-Underlay" id="spectrum-underlay"></div>
        </Provider>
      </div>
    )
  }
}

export default withRouter(MyApp)
