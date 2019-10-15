import React from 'react'
import {Helmet} from "react-helmet";
import PageHeader from '../components/PageHeader';

const GetStarted = () => (
  <>
    <Helmet>
      <meta name="Description" content=""/>
      <title>Get Started - Spectrum CSS</title>
    </Helmet>
    <PageHeader title="Get Started with Spectrum CSS"/>
    <p className="spectrum-Body2">Spectrum CSS is an open-source implementation of Spectrum, Adobe’s design system. It includes components and resources to make applications more cohesive.</p>
  </>
)

export default GetStarted
