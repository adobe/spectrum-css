import React from 'react'
import App, { Container } from 'next/app'
import Sidebar from '../components/Sidebar';
import Provider from '@react/react-spectrum/Provider';
import styles from '../css/main.scss';

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

export default class MyApp extends App {
  constructor(props) {
    super(props);
    this.state = {
      scale: 'medium'
    }

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

      <Container>

        <Helmet>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport"/>
            <link rel="icon" type="image/x-icon" href={`${process.env.BACKEND_URL}/static/favicon.ico`} />
            <link type="text/css" rel="stylesheet" href="https://wwwimages2.adobe.com/etc/beagle/public/globalnav/adobe-globalnav/latest/adobe-globalnav.min.css"/>
        </Helmet>
        <Provider theme="light" scale={this.state.scale} typekitId="uma8ayv">
          <div className={styles.flexContainer}>
          <Sidebar {...pageProps}/>
          <Layout>
            <Component {...pageProps}/>
          </Layout>
          </div>
        </Provider>
      </Container>


    )
  }
}
