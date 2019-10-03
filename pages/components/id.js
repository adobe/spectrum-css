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
            <header class="spectrum-CSSComponent-heading" id="accordion"><h2 class="spectrum-CSSComponent-title spectrum-Article spectrum-Heading1--display"><a class="spectrum-BigSubtleLink" href="#">{this.props.pageData.name}</a></h2></header>
            <table class="spectrum-CSSComponent-detailsTable"><tbody><tr><th class="spectrum-Body--secondary">Component status</th><td><div class="spectrum-StatusLight spectrum-CSSComponent-status spectrum-StatusLight--notice">Contribution</div></td></tr><tr><th class="spectrum-Body--secondary">Last released</th><td>September 5, 2019</td></tr><tr><th class="spectrum-Body--secondary">Current version</th><td>@spectrum-css/accordion@2.0.0-alpha.6</td></tr></tbody></table>
              <div classname="spectrum-CSSComponent-resources">
    <a classname="spectrum-Card spectrum-Card--small spectrum-Card--horizontal" href="https://github.com/adobe/spectrum-css/tree/master/components/accordion" target="_blank">
      <div classname="spectrum-Card-preview spectrum-CSSComponent-resource--github"><svg classname="spectrum-Icon spectrum-Icon--sizeL" focusable="false" aria-hidden="true" aria-label="GitHub" viewBox="0 0 36 36">
          <path d="M17.988 2a16.291 16.291 0 0 0-5.147 31.747c.814.149 1.111-.354 1.111-.786 0-.386-.014-1.411-.022-2.77-4.531.984-5.487-2.184-5.487-2.184a4.32 4.32 0 0 0-1.809-2.383c-1.479-1.01.112-.99.112-.99a3.42 3.42 0 0 1 2.495 1.679 3.468 3.468 0 0 0 4.741 1.353 3.482 3.482 0 0 1 1.034-2.177C11.4 25.078 7.6 23.68 7.6 17.438a6.3 6.3 0 0 1 1.677-4.371 5.863 5.863 0 0 1 .16-4.311s1.368-.438 4.479 1.67a15.451 15.451 0 0 1 8.157 0c3.109-2.108 4.475-1.67 4.475-1.67a5.857 5.857 0 0 1 .162 4.311 6.286 6.286 0 0 1 1.674 4.371c0 6.258-3.808 7.635-7.437 8.038a3.888 3.888 0 0 1 1.106 3.017c0 2.177-.02 3.934-.02 4.468 0 .436.293.943 1.12.784A16.292 16.292 0 0 0 17.988 2z" />
        </svg></div>
      <div classname="spectrum-Card-body">
        <div classname="spectrum-Card-header">
          <div classname="spectrum-Card-title">View repository</div>
        </div>
        <div classname="spectrum-Card-content">
          <div classname="spectrum-Card-description">Github</div>
        </div>
      </div>
    </a>
  </div>
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
