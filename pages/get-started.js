import React from 'react'
import {Helmet} from "react-helmet";
import PageHeader from '../components/PageHeader';
import Link from '@react/react-spectrum/Link';
import Section from '../components/Section';
import SubHeader from '../components/SubHeader';
import Highlight from 'react-highlight.js';
import compStyles from '../components/css/componentPage.scss';
import classNames from "classnames";
import Markdown from '../components/Markdown';
import styles from '../components/css/page.scss';

const GetStarted = () => (
  <div style={{overflow: 'hidden'}} className={styles.pageContainer}>
    <Helmet>
      <meta name="Description" content=""/>
      <title>Get Started - Spectrum CSS</title>
    </Helmet>
    <PageHeader title="Get Started with Spectrum CSS"/>
    <p className="spectrum-Body2">It’s easy to get up-to-speed on how to build with Spectrum CSS. The tutorial here will show you how to quickly add a Spectrum button to your website.</p>
    <p className="spectrum-Body2">For more detailed documentation beyond this introductory exercise, visit the <Link href="https://github.com/adobe/spectrum-css/blob/master/README.md">README file on the Spectrum CSS GitHub</Link> or visit the other resources listed here.</p>
    <Section title={'Resources'}>
      <p className="spectrum-Body2">
        Read our detailed instructions how to setup Spectrum CSS:
        <ul>
          <li><Link href="https://github.com/adobe/spectrum-css/blob/master/README.md">Detailed documentation</Link></li>
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
        <Markdown source={`Add the installed components in a HTML5 page (e.g., \`button.html\`) in your project’s root folder.
For displaying a button in Spectrum’s [light theme]() and [medium scale](), a couple of classes need to be added to the documents \`<html>\` tag:
\`\`\`html
<html class="spectrum spectrum--medium spectrum--light">
\`\`\`
          `}/>
      </SubHeader>
      <SubHeader title="Adding Spectrum CSS">
        <Markdown source={`Inside the \`<head>\` tag, the global variables, scales, and a theme can be added by linking to the installed files:
\`\`\`html
<head>
  <link rel="stylesheet" href="node_modules/@spectrum-css/vars/dist/spectrum-global.css" />
  <link rel="stylesheet" href="node_modules/@spectrum-css/vars/dist/spectrum-medium.css" />
  <link rel="stylesheet" href="node_modules/@spectrum-css/vars/dist/spectrum-light.css">
  <link rel="stylesheet" href="node_modules/@spectrum-css/page/dist/index-vars.css">
  <link rel="stylesheet" href="node_modules/@spectrum-css/button/dist/index-vars.css" />
</head>
\`\`\`

Inside the \`<body>\` tag, add the markup for a Spectrum button. Note that the example also includes the CSS class name to make this a call to action (CTA) variant.

\`\`\`html
<button class="spectrum-Button spectrum-Button--cta">
  <span class="spectrum-Button-label">Button</span>
</button>
\`\`\`

Here is the complete example for adding the button:

button.html

\`\`\`html
<html class="spectrum spectrum--light spectrum--medium">
  <head>
    <link rel="stylesheet" href="node_modules/@spectrum-css/vars/dist/spectrum-global.css">
    <link rel="stylesheet" href="node_modules/@spectrum-css/vars/dist/spectrum-medium.css">
    <link rel="stylesheet" href="node_modules/@spectrum-css/vars/dist/spectrum-light.css">
    <link rel="stylesheet" href="node_modules/@spectrum-css/typography/dist/index-vars.css">
  </head>
  <body>
    <button class="spectrum-Button spectrum-Button--cta">
      <span class="spectrum-Button-label">Button</span>
    </button>
  </body>
</html>

\`\`\`
            `}/>
      </SubHeader>
    </Section>
    <Section title={'Contribute to Spectrum CSS'}>
      <Markdown source={`We’d love for you to contribute to the Spectrum CSS project. Review the [contribution guidelines on our GitHub](https://github.com/adobe/spectrum-css/blob/master/.github/CONTRIBUTING.md) to get started.`}/>
    </Section>
  </div>
)

export default GetStarted
