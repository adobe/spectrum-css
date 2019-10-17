import '../css/hljs.scss';

import {Helmet} from "react-helmet";
import Highlight from 'react-highlight.js';
import Link from '@react/react-spectrum/Link';
import Markdown from '../components/Markdown';
import PageHeader from '../components/PageHeader';
import React from 'react'
import ResponsiveImage from '../components/ResponsiveImage';
import Section from '../components/Section';
import SubHeader from '../components/SubHeader';
import classNames from "classnames";
import compStyles from '../components/css/componentPage.scss';
import styles from '../css/get-started.scss'

const GetStarted = () => (
  <div style={{overflow: 'hidden', position: "relative"}} className="spectrum-Typography">
    <Helmet>
      <meta name="Description" content=""/>
      <title>Get Started - Spectrum CSS</title>
    </Helmet>
    <PageHeader title="Get Started with Spectrum CSS"/>
    <p className={classNames("spectrum-Body2", styles.p)}>We have a number of resources that outline how to set up Spectrum CSS for your project, as well as an introductory tutorial that’s a hands-on way to understand how our implementation works.</p>
    <Section title={'Resources'}>
      <p className={classNames("spectrum-Body2", styles.p)}>
        If you’re ready to jump in, here’s how to set up Spectrum CSS on our GitHub:
      </p>
      <ul>
        <li><Link href="https://github.com/adobe/spectrum-css/blob/master/README.md">Full README</Link></li>
        <li><Link href="https://github.com/adobe/spectrum-css/blob/master/README.md#importing-ui-icons">Importing icons</Link></li>
        <li><Link href="https://github.com/adobe/spectrum-css/blob/master/README-legacy.md">IE 11 / legacy support</Link></li>
      </ul>
    </Section>
    <Section title={'Tutorial: add a Spectrum button'}>
      <p className={classNames("spectrum-Body2", styles.p)}>This introductory exercise will show you how to quickly add a Spectrum button to your project.</p>
      <div className={styles.subSection}>
        <SubHeader title="Installing Spectrum CSS"/>
        <p className={classNames("spectrum-Body2", styles.p)}>Spectrum CSS requires a Node.js environment with a minimum version of 10.</p>
        <p className={classNames("spectrum-Body2", styles.p)}>
          First, install the required button dependencies by running:
        </p>
        <Highlight language="shell" className={classNames('spectrum-Code4', compStyles.markupPre, styles.codeBlock)}>
          $ npm install @spectrum-css/vars @spectrum-css/button @spectrum-css/page
        </Highlight>
        <p className={classNames("spectrum-Body2", styles.p)}>Installed components will be available in the <code className='spectrum-Code4'>node_modules/@spectrum-css/</code> folder or on the <Link href="https://www.npmjs.com/org/spectrum-css">Spectrum CSS NPM page</Link>.</p>
      </div>
      <div className={styles.subSection}>
        <SubHeader className={styles.subSection} title="Setting up global variables"></SubHeader>
        <p className={classNames("spectrum-Body2", styles.p)}>Create a new HTML file (e.g., <code className='spectrum-Code4'>button.html</code>) in your project’s root folder.</p>
        <p className={classNames("spectrum-Body2", styles.p)}>For displaying a button in Spectrum’s <Link href="https://spectrum.corp.adobe.com/page/color/#Color-themes">light color theme</Link> and <Link href="https://spectrum.corp.adobe.com/page/platform-scale/">medium scale</Link>, a couple of classes need to be added to the document’s <code className='spectrum-Code4'>&lt;html&gt;</code> tag:</p>
        <Highlight language="html" className={classNames('spectrum-Code4', compStyles.markupPre, styles.codeBlock)}>
          {`<html class="spectrum spectrum--medium spectrum--light">`}
        </Highlight>
      </div>
      <div className={styles.subSection}>
        <SubHeader className={styles.subSection} title="Adding Spectrum CSS"></SubHeader>
        <p className={classNames("spectrum-Body2", styles.p)}>Inside the <code className='spectrum-Code4'>{`<head>`}</code> tag, include the stylesheets that contain the design system tokens for global variables, scales, and color themes, as well as the stylesheets for the components themselves:</p>
        <Highlight language="html" className={classNames('spectrum-Code4', compStyles.markupPre, 'is-open', styles.codeBlock)}>
          {`<head>
  <link rel="stylesheet" href="node_modules/@spectrum-css/vars/dist/spectrum-global.css">
  <link rel="stylesheet" href="node_modules/@spectrum-css/vars/dist/spectrum-medium.css">
  <link rel="stylesheet" href="node_modules/@spectrum-css/vars/dist/spectrum-light.css">
  <link rel="stylesheet" href="node_modules/@spectrum-css/page/dist/index-vars.css">
  <link rel="stylesheet" href="node_modules/@spectrum-css/button/dist/index-vars.css">
</head>`}
        </Highlight>
        <p className={classNames("spectrum-Body2", styles.p)}>Inside the <code className='spectrum-Code4'>{`<body>`}</code> tag, add the markup for a Spectrum button. Note that the example also includes the CSS class name, <code className='spectrum-Code4'>{`spectrum-Button--cta`}</code>, to use the call to action (CTA) option.</p>
        <Highlight language="html" className={classNames('spectrum-Code4', compStyles.markupPre, 'is-open', styles.codeBlock)}>
          {`<button class="spectrum-Button spectrum-Button--cta">
  <span class="spectrum-Button-label">Button</span>
</button>`}
        </Highlight>
        <p className={classNames("spectrum-Body2", styles.p)}>Here’s what your final <code className='spectrum-Code4'>{`button.html`}</code> file should look like:</p>
        <Highlight language="html" className={classNames('spectrum-Code4', compStyles.markupPre, 'is-open', styles.codeBlock)}>
          {`<html class="spectrum spectrum--light spectrum--medium">
  <head>
    <link rel="stylesheet" href="node_modules/@spectrum-css/vars/dist/spectrum-global.css">
    <link rel="stylesheet" href="node_modules/@spectrum-css/vars/dist/spectrum-medium.css">
    <link rel="stylesheet" href="node_modules/@spectrum-css/vars/dist/spectrum-light.css">
    <link rel="stylesheet" href="node_modules/@spectrum-css/page/dist/index-vars.css">
    <link rel="stylesheet" href="node_modules/@spectrum-css/button/dist/index-vars.css">
  </head>
  <body>
    <button class="spectrum-Button spectrum-Button--cta">
      <span class="spectrum-Button-label">Button</span>
    </button>
  </body>
</html>`}
        </Highlight>
      </div>
      <ResponsiveImage style={{maxWidth: "100%"}} image={{
        "contentType": "image/png",
        "details": {
          "image": {
            "width": 1224,
            "height": 1040
          },
          "size": 286704
        },
        "fileName": "button-screen-shot.png",
        "url": "/static/images/button-screen-shot.png"
      }}/>
    </Section>
    <Section title={'Contribute to Spectrum CSS'}>
      <Markdown source={`We’d love for you to contribute to the Spectrum CSS project. Review the [contribution guidelines on our GitHub](https://github.com/adobe/spectrum-css/blob/master/.github/CONTRIBUTING.md) to get started.`}/>
    </Section>
  </div>
)

export default GetStarted
