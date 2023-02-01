---
layout: root.njk
title: Getting Started
permalink: docs/get-started.html
---

<div class="spectrum-Site-mainContainer">
  <div class="spectrum-Site-page spectrum-Typography">
    <h1 class="spectrum-Heading spectrum-Heading--sizeXXL spectrum-Heading--serif">Get started with Spectrum CSS</h1>
    <p class="spectrum-Body spectrum-Body--sizeL">We have a number of resources that outline how to set up Spectrum CSS for your project, as well as an introductory tutorial that's a hands-on way to understand how our implementation works.</p>
    <header id="resources">
      <h2 class="spectrum-Heading spectrum-Heading--sizeM">
        <a class="spectrum-BigSubtleLink" href="#resources">Resources</a>
      </h2>
      <hr class="spectrum-Divider spectrum-Divider--large"/>
    </header>
    <section>
      <p class="spectrum-Body spectrum-Body--sizeL">If you're ready to jump in, here's how to set up Spectrum CSS on our GitHub:</p>
      <ul class="spectrum-Body spectrum-Body--sizeL">
        <li>
          <a class="spectrum-Link spectrum-Link--quiet" href="https://github.com/adobe/spectrum-css/blob/main/README.md">Full
            README</a>
        </li>
        <li>
          <a
            class="spectrum-Link spectrum-Link--quiet"
            href="https://github.com/adobe/spectrum-css/blob/main/README.md#importing-ui-icons">Importing icons</a>
        </li>
        <li>
          <a class="spectrum-Link spectrum-Link--quiet" href="https://github.com/adobe/spectrum-css/blob/main/README-legacy.md">IE 11 / legacy support</a>
        </li>
      </ul>
    </section>
    <header id="tutorial">
      <h2 class="spectrum-Heading spectrum-Heading--sizeM">
        <a class="spectrum-BigSubtleLink" href="#tutorial">Tutorial: add a Spectrum button</a>
      </h2>
      <hr class="spectrum-Divider spectrum-Divider--large"/>
    </header>
    <section>
      <p class="spectrum-Body spectrum-Body--sizeL">This introductory exercise will show you how to quickly add a Spectrum button to your project.</p>
      <h3 class="spectrum-Heading spectrum-Heading--sizeS">Installing Spectrum CSS</h3>
      <p class="spectrum-Body spectrum-Body--sizeL">Spectrum CSS requires a Node.js environment with a minimum version of 10.</p>
      <p class="spectrum-Body spectrum-Body--sizeL">First, install the required button dependencies by running:</p>
      {% highlight "js" %}
$ npm install @spectrum-css/vars @spectrum-css/button @spectrum-css/page
{% endhighlight %}
      <p class="spectrum-Body spectrum-Body--sizeL">Installed components will be available in the node_modules/@spectrum-css/ folder or on the Spectrum CSS NPM page.</p>
      <h3 class="spectrum-Heading spectrum-Heading--sizeS">Setting up global variables</h3>
      <p class="spectrum-Body spectrum-Body--sizeL">Create a new HTML file (e.g.,
        <code class="spectrum-Code spectrum-Code--sizeS">button.html</code>) in your project’s root folder.</p>
      <p class="spectrum-Body spectrum-Body--sizeL">or displaying a button in Spectrum’s light color theme and medium scale, a
        couple of classes need to be added to the document’s
        <code class="spectrum-Code spectrum-Code--sizeS">&lt;html&gt;</code>
        tag:</p>
        {% highlight "html" %}
        <html class="spectrum spectrum--medium spectrum--light">
  {% endhighlight %}
      <h3 class="spectrum-Heading spectrum-Heading--sizeS">Adding Spectrum CSS</h3>
      <p class="spectrum-Body spectrum-Body--sizeL">Inside the
        <code class="spectrum-Code spectrum-Code--sizeS">&lt;head&gt;</code>
        tag, include the stylesheets that contain the design system tokens for global variables, scales, and color themes, as
        well as the stylesheets for the components themselves:</p>
        {% highlight "html" %}
        <head>
<link rel='stylesheet' href='node_modules/@spectrum-css/vars/dist/spectrum-global.css'>
<link rel='stylesheet' href='node_modules/@spectrum-css/vars/dist/spectrum-medium.css'>
<link rel='stylesheet' href='node_modules/@spectrum-css/vars/dist/spectrum-light.css'>
<link rel='stylesheet' href='node_modules/@spectrum-css/button/dist/index-vars.css'>
</head>
        {% endhighlight %}
      <p class="spectrum-Body spectrum-Body--sizeL">Inside the
        <code class="spectrum-Code spectrum-Code--sizeS">&lt;body&gt;</code>
        tag, add the markup for a Spectrum button. Note that the example also includes the CSS class name,
        <code class="spectrum-Code spectrum-Code--sizeS">spectrum-Button--fill spectrum-Button--accent</code>, to use the call to action (CTA) option.</p>
      {% highlight "html" %}
<button class="spectrum-Button spectrum-Button--fill spectrum-Button--accent spectrum-Button--sizeM">
  <span class="spectrum-Button-label">Button</span>
</button>
{% endhighlight %}
      <p class="spectrum-Body spectrum-Body--sizeL">Here’s what your final button.html file should look like:</p>
      {% highlight "html" %}
      <html class="spectrum spectrum--light spectrum--medium">
<head>
  <link rel="stylesheet" href="node_modules/@spectrum-css/vars/dist/spectrum-global.css">
  <link rel="stylesheet" href="node_modules/@spectrum-css/vars/dist/spectrum-medium.css">
  <link rel="stylesheet" href="node_modules/@spectrum-css/vars/dist/spectrum-light.css">
  <link rel="stylesheet" href="node_modules/@spectrum-css/page/dist/index-vars.css">
  <link rel="stylesheet" href="node_modules/@spectrum-css/button/dist/index-vars.css">
</head>
<body>
  <button class="spectrum-Button spectrum-Button--fill spectrum-Button--accent spectrum-Button--sizeM">
    <span class="spectrum-Button-label">Button</span>
  </button>
</body>
</html>
{% endhighlight %}
      <img
        class="spectrum-CenteredImage"
        alt="Screenshot of the rendered CTA button in a browser window"
        src="img/button-screen-shot.png"/>
      <header id="contribute">
        <h2 class="spectrum-Heading spectrum-Heading--sizeM">
          <a class="spectrum-BigSubtleLink" href="#contribute">Contribute to Spectrum CSS</a>
        </h2>
        <hr class="spectrum-Divider spectrum-Divider--large"/>
      </header>
      <p class="spectrum-Body spectrum-Body--sizeL">We’d love for you to contribute to the Spectrum CSS project. Review the
        <a
          href="https://github.com/adobe/spectrum-css/blob/main/.github/CONTRIBUTING.md"
          class="spectrum-Link spectrum-Link--quiet"
          target="_blank">contribution guidelines on our GitHub</a>
        to get started.</p>
    </section>
  </div>
</div>
