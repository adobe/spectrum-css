import React, { Component } from "react";
import ReactDOM from "react-dom";
import { withRouter } from "next/router";
import styles from "../../css/main.scss";
import classNames from "classnames";
import StatusLight from '@react/react-spectrum/StatusLight';
import ResourceCard from '../../components/ResourceCard';
import "../../css/componentpage.css";

async function loadData(id) {
  let data = await import(`../../data/yml/${id}.yml`);
  return data;
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    //console.log(publicRuntimeConfig.ENVIRONMENT);
  }
  static async getInitialProps() {
    const node_env = process.env.NODE_ENV;
    return { node_env };
  }
  render() {
    let examplesList = "no examples";
    if (this.props.pageData.hasOwnProperty("examples")) {
      examplesList = this.props.pageData.examples.map(function(example) {
        return (
          <div key={example.slug}>
            <h3>{example.name}</h3>
            <pre>
              <code>{example.markup}</code>
            </pre>
            <div
              dangerouslySetInnerHTML={{
                __html: example.markup
              }}
            />
          </div>
        );
      });
    }
    return (
        <article className={classNames('spectrum-CSSComponent', "afg-container-fluid", styles.mainContainer)}>
          <style>{`${this.props.pageData.peerCSS}${this.props.pageData.indexCSS}`}</style>
          <header className="spectrum-CSSComponent-heading" id="banner">
            <h2 className="spectrum-CSSComponent-title spectrum-Article spectrum-Heading1--display">
              <a className="spectrum-BigSubtleLink" href="#banner">
                {this.props.pageData.name}
              </a>
            </h2>
          </header>
          <table className="spectrum-CSSComponent-detailsTable">
            <tbody>
              <tr>
                <th className="spectrum-Body--secondary">Component status</th>
                <td>
                  <StatusLight variant="notice">Contribution</StatusLight>
                </td>
              </tr>
              <tr>
                <th className="spectrum-Body--secondary">Last released</th>
                <td>October 8, 2019</td>
              </tr>
              <tr>
                <th className="spectrum-Body--secondary">Current version</th>
                <td>@spectrum-css/banner@2.0.0</td>
              </tr>
            </tbody>
          </table>
          <div className="spectrum-CSSComponent-resources">
            <a
              className="spectrum-Card spectrum-Card--small spectrum-Card--horizontal"
              href="https://github.com/adobe/spectrum-css/tree/master/components/banner"
              target="_blank"
            >
              <div className="spectrum-Card-preview spectrum-CSSComponent-resource--github">
                <svg
                  className="spectrum-Icon spectrum-Icon--sizeL"
                  focusable="false"
                  aria-hidden="true"
                  aria-label="GitHub"
                  viewBox="0 0 36 36"
                >
                  <path d="M17.988 2a16.291 16.291 0 0 0-5.147 31.747c.814.149 1.111-.354 1.111-.786 0-.386-.014-1.411-.022-2.77-4.531.984-5.487-2.184-5.487-2.184a4.32 4.32 0 0 0-1.809-2.383c-1.479-1.01.112-.99.112-.99a3.42 3.42 0 0 1 2.495 1.679 3.468 3.468 0 0 0 4.741 1.353 3.482 3.482 0 0 1 1.034-2.177C11.4 25.078 7.6 23.68 7.6 17.438a6.3 6.3 0 0 1 1.677-4.371 5.863 5.863 0 0 1 .16-4.311s1.368-.438 4.479 1.67a15.451 15.451 0 0 1 8.157 0c3.109-2.108 4.475-1.67 4.475-1.67a5.857 5.857 0 0 1 .162 4.311 6.286 6.286 0 0 1 1.674 4.371c0 6.258-3.808 7.635-7.437 8.038a3.888 3.888 0 0 1 1.106 3.017c0 2.177-.02 3.934-.02 4.468 0 .436.293.943 1.12.784A16.292 16.292 0 0 0 17.988 2z" />
                </svg>
              </div>
              <div className="spectrum-Card-body">
                <div className="spectrum-Card-header">
                  <div className="spectrum-Card-title">View repository</div>
                </div>
                <div className="spectrum-Card-content">
                  <div className="spectrum-Card-description">Github</div>
                </div>
              </div>
            </a>
            <ResourceCard
                        type="CSS"
                        url="#"
                        title="View component"

                        subTitle="Spectrum CSS"
                        versionData={this.props.versionData}
                      />
            <a
              className="spectrum-Card spectrum-Card--small spectrum-Card--horizontal"
              href="https://www.npmjs.com/package/@spectrum-css/banner"
              target="_blank"
            >
              <div className="spectrum-Card-preview spectrum-CSSComponent-resource--npm">
                <svg
                  className="spectrum-Icon spectrum-Icon--sizeL"
                  viewBox="0 0 18 7"
                  focusable="false"
                  aria-hidden="true"
                  aria-label="npm"
                >
                  <path
                    fill="#CB3837"
                    d="M0,0h18v6H9v1H5V6H0V0z M1,5h2V2h1v3h1V1H1V5z M6,1v5h2V5h2V1H6z M8,2h1v2H8V2z M11,1v4h2V2h1v3h1V2h1v3h1V1H11z"
                  />
                  <polygon
                    fill="#FFFFFF"
                    points="1,5 3,5 3,2 4,2 4,5 5,5 5,1 1,1 "
                  />
                  <path fill="#FFFFFF" d="M6,1v5h2V5h2V1H6z M9,4H8V2h1V4z" />
                  <polygon
                    fill="#FFFFFF"
                    points="11,1 11,5 13,5 13,2 14,2 14,5 15,5 15,2 16,2 16,5 17,5 17,1 "
                  />
                </svg>
              </div>
              <div className="spectrum-Card-body">
                <div className="spectrum-Card-header">
                  <div className="spectrum-Card-title">View package</div>
                </div>
                <div className="spectrum-Card-content">
                  <div className="spectrum-Card-description">npm</div>
                </div>
              </div>
            </a>
          </div>
          <header
            className="spectrum-CSSComponent-sectionHeading"
            id="variants"
          >
            <h4 className="spectrum-Heading3">
              <a className="spectrum-BigSubtleLink" href="#variants">
                Variants
              </a>
            </h4>
            <hr className="spectrum-Rule spectrum-Rule--large" />
          </header>
          {this.props.pageData.examples.map(function(example) {
            return (
              <article className="spectrum-CSSExample" key={example.slug}>
                <h5 className="spectrum-CSSExample-heading spectrum-Heading4" id={example.slug}>
                  <a className="spectrum-CSSComponent-link" href={`#${example.slug}`}>
                    {example.name}
                  </a>
                  <StatusLight variant="notice">Contribution</StatusLight>
                </h5>
                <section className="spectrum-CSSExample-container">
                  <div className="spectrum-CSSExample-example" dangerouslySetInnerHTML={{
                    __html: example.markup
                  }}/>
                  <div className="spectrum-CSSExample-markup">
                    <a
                      className="js-markup-toggle spectrum-CSSExample-markupToggle spectrum-Link"
                      href="#"
                    >
                      Show markup
                    </a>
                    <pre>
                      <code className="language-markup">
                        {example.markup}
                      </code>
                    </pre>
                  </div>
                </section>
              </article>
            );
          })}
        </article>
    );
  }
}
Page.getInitialProps = async function(context) {
  const { id } = context.query;
  const pageData = await loadData(id);
  return { pageData: pageData.default };
};
export default withRouter(Page);
