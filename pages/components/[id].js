import React, {Component} from "react";
import ReactDOM from "react-dom";
import {withRouter} from 'next/router'
import styles from '../../css/main.scss';
import classNames from 'classnames';

async function loadData(id) {
  let data = await import (`../../data/yml/${id}.yml`);
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
    let examplesList = 'no examples'
    if(this.props.pageData.hasOwnProperty('examples')) {
      examplesList = this.props.pageData.examples.map(function(example) {
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
    }
    return (<div>
        <div>
          <div className={classNames('afg-container-fluid', styles.mainContainer)}>
            <h1>{this.props.pageData.name}</h1>
            <p>{this.props.pageData.description}</p>
            <div>
              <h2>Examples</h2>
              {examplesList}
            </div>
          </div>
        </div>
    </div>)
  }
}
Page.getInitialProps = async function(context) {

  const {id} = context.query
  const pageData = await import (`../../data/yml/${id}.yml`);
  return {pageData: pageData.default}
}
export default withRouter(Page)
