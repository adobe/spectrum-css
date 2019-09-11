import React, {Component} from "react";
import ReactDOM from "react-dom";
import {withRouter} from 'next/router'
import Layout from '../../components/MyLayout.js'
import {Helmet} from "react-helmet";
import Provider from '@react/react-spectrum/Provider';
import Sidebar from '../../components/Sidebar';
import styles from '../../css/main.scss';
import classNames from 'classnames';

async function loadData(id) {
  let data = await import (`../../data/yml/${id}.yml`);
  console.log({data})
  return "poop"
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    //console.log(publicRuntimeConfig.ENVIRONMENT);
  }
  static async getInitialProps() {
    const node_env = process.env.NODE_ENV
    return {node_env}
  }
  render() {
    var examplesList = this.props.pageData.examples.map(function(example) {
      return <div key={example.slug}>
        <h3>{example.name}</h3>
        <pre>
            <code>
              {example.markup}
            </code>
          </pre>
        <div dangerouslySetInnerHTML={{
            __html: example.markup
          }}/>
      </div>
    })
    return (<Layout>
      <Helmet>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport"/>
        <link rel="icon" type="image/x-icon" href="/static/favicon.png"/>
        <link type="text/css" rel="stylesheet" href="https://wwwimages2.adobe.com/etc/beagle/public/globalnav/adobe-globalnav/latest/adobe-globalnav.min.css"/>
      </Helmet>
      <Provider theme="light" scale='medium' typekitId="uma8ayv">
        <div style={{
            display: "flex"
          }}>
          <div style={{
              width: "248px"
            }}>
          <Sidebar/>
          </div>
          <div className={classNames('afg-container-fluid', styles.mainContainer)}>
            <h1>{this.props.pageData.name}</h1>
            <p>{this.props.pageData.description}</p>
            <div>
              <h2>Examples</h2>
              {examplesList}
            </div>
          </div>
        </div>
      </Provider>
    </Layout>)
  }
}
Page.getInitialProps = async function(context) {

  const {id} = context.query
  const pageData = await import (`../../data/yml/${id}.yml`);
  return {pageData: pageData.default}
}
export default withRouter(Page)
