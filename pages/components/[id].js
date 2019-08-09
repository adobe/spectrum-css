import React, {Component} from "react";
import ReactDOM from "react-dom";
import {withRouter} from 'next/router'
import Layout from '../../components/MyLayout.js'

async function loadData(id) {
  let data = await import (`../../data/${id}.yml`);
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
  // componentWillReceiveProps(newProps) {
  //   const oldProps = this.props
  //   if(oldProps.router.query.id !== newProps.router.query.id) {
  //     if(!window.location.hash) {
  //       document.documentElement.scrollTop = document.body.scrollTop = 0;
  //     }
  //   }
  // }
  render() {
    var examplesList = this.props.pageData.examples.map(function(example) {
      return <div key={example.slug}>
        <h3>{example.name}</h3>
        <div dangerouslySetInnerHTML={{ __html: example.markup }}/>
      </div>
    })
    return (<Layout>
      <h1>{this.props.pageData.name}</h1>
      <p>{this.props.pageData.description}</p>
      <div>
        <h2>Examples</h2>
        {examplesList}
      </div>
    </Layout>)
  }
}
Page.getInitialProps = async function(context) {

  const {id} = context.query
  const pageData = await import (`../../data/${id}.yml`);
  return {pageData: pageData.default}
}
export default withRouter(Page)
