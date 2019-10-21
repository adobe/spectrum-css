import '../../css/hljs.scss';

import React, { Component } from "react";

import {Helmet} from "react-helmet";
import Highlight from 'react-highlight.js';
import Link from '@react/react-spectrum/Link';
import Markdown from '../../components/Markdown';
import PageHeader from '../../components/PageHeader';
import ReactDOM from "react-dom";
import ResourceCard from '../../components/ResourceCard';
import Section from '../../components/Section';
import Status from '../../components/Status';
import StatusLight from '@react/react-spectrum/StatusLight';
import SubHeader from '../../components/SubHeader';
import classNames from "classnames";
import compStyles from '../../components/css/componentPage.scss';
import styles from '../../components/css/page.scss';
import { withRouter } from "next/router";

async function loadData(id) {
  let data = await import(`../../data/yml/${id}.yml`);
  return data;
}
class Markup extends React.Component {
  constructor(props) {
    super(props);
    this.clickHander = this.clickHander.bind(this);
    this.state = {
      openFlag: false
    };
  }
  clickHander(e) {
    this.setState((state, props) => {
      return {
        openFlag: !state.openFlag
      }
    });
    event.preventDefault();
  }
  render() {
    return (
      <div className={compStyles.markup}>
        <Highlight language="html" className={classNames('spectrum-Code4', compStyles.markupPre, {'is-open': this.state.openFlag})}>
          {this.props.children}
        </Highlight>
        <Link className={compStyles.toggle} href="#" onClick={this.clickHander}>{ !this.state.openFlag ? ('Show markup') : ('Hide markup')}</Link>
      </div>
    );
  }
}

class Variant extends React.Component {
  render() {
    this.props.example.markup = this.props.example.markup.replace('src="img/', `src="${process.env.BACKEND_URL}/static/images/`)
    return (
      <article>
        <SubHeader title={this.props.example.name}>
          <Status className={compStyles.subHeadStatusLight} status={this.props.example.status}/>
        </SubHeader>
        { this.props.example.description ? (
          <Markdown source={this.props.example.description}/>
        ) : undefined }
        { this.props.example.details ? (
          <Markdown source={this.props.example.details}/>
        ) : undefined }
        { this.props.example.markup ? (
          <section className={compStyles.exampleContainer}>
            <div className={compStyles.example} dangerouslySetInnerHTML={{
              __html: this.props.example.markup
            }}/>
          <Markup>{this.props.example.markup}</Markup>
        </section>
        ) : undefined }
      </article>
    )
  }
}


class Page extends React.Component {
  constructor(props) {
    super(props);
  }
  static async getInitialProps() {
    const node_env = process.env.NODE_ENV;
    return { node_env };
  }
  render() {
    const componentStatus = this.props.pageData.status || "Contribution";
    return (
      <div style={{overflow: 'hidden'}} className={styles.pageContainer}>
        <Helmet>
          <meta name="Description" content={this.props.pageData.description}/>
          <title> {this.props.pageData.name} - Spectrum CSS</title>
          <style>{`${this.props.pageData.peerCSS}${this.props.pageData.indexCSS}`}</style>
        </Helmet>
        <PageHeader title={this.props.pageData.name}/>
        <table className={compStyles.detailsTable}>
          <tbody>
            <tr>
              <th className="spectrum-Body--secondary">Component status</th>
              <td>
                <Status className={compStyles.compStatus} status={componentStatus}/>
              </td>
            </tr>
            <tr>
              <th className="spectrum-Body--secondary">Last released</th>
              <td className="spectrum-Body4">October 8, 2019</td>
            </tr>
            <tr>
              <th className="spectrum-Body--secondary">Current version</th>
              <td className="spectrum-Body4">{this.props.pageData.packageName}@{this.props.pageData.packageVersion}</td>
            </tr>
          </tbody>
        </table>
        <div className={compStyles.resourceCards}>
          { this.props.pageData.SpectrumSiteSlug ? (
            <ResourceCard
              type="Spectrum"
              url={this.props.pageData.SpectrumSiteSlug}
              title="View guidelines"
              subTitle="Spectrum"
            />
          ) : undefined }
          <ResourceCard
            type="GitHub"
            url={`https://github.com/adobe/spectrum-css/tree/master/components/${this.props.pageData.packageSlug}`}
            title="View repository"
            subTitle="Github"
          />
          <ResourceCard
            type="NPM"
            url={`https://www.npmjs.com/package/${this.props.pageData.packageName}`}
            title="View package"
            subTitle="NPM"
          />
        </div>
      { this.props.pageData.description ? (
        <Section title={'Usage notes'}>
          <Markdown source={this.props.pageData.description}/>
        </Section>
      ) : undefined }
      <Section title={'Variants'}>
        {this.props.pageData.examples.map(function(example, index) {
          example.status = example.status || componentStatus;
          return(
            <Variant key={`${example.id}-${index}`} example={example}/>
          )
        }, this)}
        </Section>
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
