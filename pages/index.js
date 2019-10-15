import React from 'react'
import {Helmet} from "react-helmet";
import PageHeader from '../components/PageHeader';
import HeroImage from '../components/HeroImage';

const Home = () => (
  <div style={{overflow: 'hidden', position: "relative"}}>
    <Helmet>
      <meta name="Description" content=""/>
      <title>Spectrum CSS</title>
    </Helmet>
    <PageHeader title="Meet Spectrum CSS"/>
    <p className="spectrum-Body2">Spectrum CSS is an open-source implementation of Spectrum, Adobe’s design system. It includes components and resources to make applications more cohesive.</p>
  </div>
)

export default Home
