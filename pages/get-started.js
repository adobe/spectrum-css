import React from 'react'
import {Helmet} from "react-helmet";
import Link from '@react/react-spectrum/Link';
import Highlight from 'react-highlight.js';
import classNames from "classnames";
import Markdown from '../components/Markdown';
import PageHeader from '../components/PageHeader';
import Section from '../components/Section';
import SubHeader from '../components/SubHeader';
import compStyles from '../components/css/componentPage.scss';
import '../css/hljs.scss';
import Styles from '../css/get-started.scss'

const GetStarted = () => (
  <div style={{overflow: 'hidden', position: "relative"}} className="spectrum-Typography">
    <Helmet>
      <meta name="Description" content=""/>
      <title>Get Started - Spectrum CSS</title>
    </Helmet>
    <PageHeader title="Get Started with Spectrum CSS"/>
    <p className="spectrum-Body2">We have a number of resources that outline how to set up Spectrum CSS for your project, as well as an introductory tutorial that’s a hands-on way to understand how our implementation works.</p>
    <Section title={'Resources'}>
      <p className="spectrum-Body2">
        If you’re ready to jump in, here’s how to set up Spectrum CSS on our GitHub:
        <ul>
          <li><Link href="https://github.com/adobe/spectrum-css/blob/master/README.md">Full README</Link></li>
          <li><Link href="https://github.com/adobe/spectrum-css/blob/master/README.md#importing-ui-icons">Importing icons</Link></li>
          <li><Link href="https://github.com/adobe/spectrum-css/blob/master/README-legacy.md">IE 11 / legacy support</Link></li>
        </ul>
      </p>
    </Section>
    <Section title={'Tutorial: add a Spectrum button'}>
      <p className="spectrum-Body2">This introductory exercise will show you how to quickly add a Spectrum button to your project.</p>
      <SubHeader title="Installing Spectrum CSS">
        <p className="spectrum-Body2">Spectrum CSS requires a Node.js environment with a minimum version of 10.</p>
        <p className="spectrum-Body2">
          First, install the required button dependencies by running:
          <Highlight language="shell" className={classNames('spectrum-Code4', compStyles.markupPre)}>
            $ npm install @spectrum-css/vars @spectrum-css/button @spectrum-css/page
          </Highlight>
        </p>
        <p className="spectrum-Body2">Installed components will be available in the <code className='spectrum-Code4'>node_modules/@spectrum-css/</code> folder or on the <Link href="https://www.npmjs.com/org/spectrum-css">Spectrum CSS NPM page</Link>.</p>
      </SubHeader>
      <SubHeader title="Setting up global variables">
        <p className="spectrum-Body2">Create a new HTML file (e.g., <code className='spectrum-Code4'>button.html</code>) in your project’s root folder.</p>
        <p className="spectrum-Body2">For displaying a button in Spectrum’s <Link href="https://spectrum.corp.adobe.com/page/color/#Color-themes">light color theme</Link> and <Link href="https://spectrum.corp.adobe.com/page/platform-scale/">medium scale</Link>, a couple of classes need to be added to the document’s <code className='spectrum-Code4'>&lt;html&gt;</code> tag:</p>
        <Highlight language="html" className={classNames('spectrum-Code4', compStyles.markupPre)}>
          {`<html class="spectrum spectrum--medium spectrum--light">`}
        </Highlight>
      </SubHeader>
      <SubHeader title="Adding Spectrum CSS">
        <p className="spectrum-Body2">Inside the <code className='spectrum-Code4'>{`<head>`}</code> tag, include the stylesheets that contain the design system tokens for global variables, scales, and color themes, as well as the stylesheets for the components themselves:</p>
        <Highlight language="html" className={classNames('spectrum-Code4', compStyles.markupPre, 'is-open')}>
          {`<head>
  <link rel="stylesheet" href="node_modules/@spectrum-css/vars/dist/spectrum-global.css">
  <link rel="stylesheet" href="node_modules/@spectrum-css/vars/dist/spectrum-medium.css">
  <link rel="stylesheet" href="node_modules/@spectrum-css/vars/dist/spectrum-light.css">
  <link rel="stylesheet" href="node_modules/@spectrum-css/page/dist/index-vars.css">
  <link rel="stylesheet" href="node_modules/@spectrum-css/button/dist/index-vars.css">
</head>`}
        </Highlight>
        <p className="spectrum-Body2">Inside the <code className='spectrum-Code4'>{`<body>`}</code> tag, add the markup for a Spectrum button. Note that the example also includes the CSS class name, <code className='spectrum-Code4'>{`spectrum-Button--cta`}</code>, to use the call to action (CTA) option.</p>
        <Highlight language="html" className={classNames('spectrum-Code4', compStyles.markupPre, 'is-open')}>
          {`<button class="spectrum-Button spectrum-Button--cta">
  <span class="spectrum-Button-label">Button</span>
</button>`}
        </Highlight>
        <p className="spectrum-Body2">Here’s what your final <code className='spectrum-Code4'>{`button.html`}</code> file should look like:</p>
        <Highlight language="html" className={classNames('spectrum-Code4', compStyles.markupPre, 'is-open')}>
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
      </SubHeader>
      <a className="jsbin-embed" href="https://jsbin.com/junupun/1/embed?html,output">JS Bin on jsbin.com</a><script src="https://static.jsbin.com/js/embed.min.js?4.1.7"></script>
    </Section>
    <Section title={'Contribute to Spectrum CSS'}>
      <Markdown source={`We’d love for you to contribute to the Spectrum CSS project. Review the [contribution guidelines on our GitHub](https://github.com/adobe/spectrum-css/blob/master/.github/CONTRIBUTING.md) to get started.`}/>
    </Section>
  </div>
)

export default GetStarted
