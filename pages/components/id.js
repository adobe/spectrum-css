import React, { Component } from "react";
import ReactDOM from "react-dom";
import { withRouter } from "next/router";
import Prism from "prismjs";
import 'prismjs/themes/prism.css';
import classNames from "classnames";
import StatusLight from '@react/react-spectrum/StatusLight';
import styles from '../../components/css/page.scss';
import compStyles from '../../components/css/componentPage.scss';
import ResourceCard from '../../components/ResourceCard';
import {Helmet} from "react-helmet";
import PageHeader from '../../components/PageHeader';

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
      <div className={styles.pageContainer}>
        <Helmet>
          <meta name="Description" content={this.props.pageData.description}/>
          <title> {this.props.pageData.name} - Spectrum CSS</title>
          <style>{`${this.props.pageData.peerCSS}${this.props.pageData.indexCSS}`}</style>
        </Helmet>
        <PageHeader title={this.props.pageData.name}/>
        <table className={compStyles.detailsTable}>
          <tbody>
            <tr>
              <th className="spectrum-Body--secondary">Component status</th>{/*TODO: replace with react-spectrum typography components*/}
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
        <ResourceCard
          type="Spectrum"
          url="#"
          title="View guidelines"
          subTitle="Spectrum"
        />
        <ResourceCard
          type="GitHub"
          url="#"
          title="View repository"
          subTitle="Github"
        />
        <ResourceCard
          type="NPM"
          url="#"
          title="View package"
          subTitle="NPM"
        />
      </div>
    );
  }
}
Page.getInitialProps = async function(context) {
  const { id } = context.query;
  const pageData = await loadData(id);
  return { pageData: pageData.default };
};
export default withRouter(Page);
