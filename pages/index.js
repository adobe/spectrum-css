import React from 'react'
import {Helmet} from "react-helmet";
import HeroImage from '../components/HeroImage';
import SubHeader from '../components/SubHeader';
import PageHeader from '../components/PageHeader';

const Home = () => (
  <div style={{overflow: 'hidden', position: "relative"}}>
    <Helmet>
      <meta name="Description" content=""/>
      <title>Spectrum CSS</title>
    </Helmet>
    <PageHeader title="Meet Spectrum CSS"/>
    <p className="spectrum-Body2">Spectrum CSS is an open-source implementation of Spectrum, Adobe’s design system. It includes components and resources to make applications more cohesive.</p>
    <HeroImage
      desktop={{
        description: "Spectrum CSS Hero image",
        file: {
          contentType: "image/png",
          details: {
            image: {
              width: 4278,
              height: 1952,
            },
            size: 671941,
          },
          fileName: "spectrum-css_illustration_desktop@2x.png",
          url: `${process.env.BACKEND_URL}/static/images/spectrum-css_illustration_desktop@2x.png`
        }
      }}
      mobile={{
        description: "Spectrum CSS Hero image",
        file: {
          contentType: "image/png",
          details: {
            image: {
              width: 1346,
              height: 1281,
            },
            size: 127178,
          },
          fileName: "spectrum-css_illustration_mobile@2x.png",
          url: `${process.env.BACKEND_URL}/static/images/spectrum-css_illustration_mobile@2x.png`
        }
      }}
      style={'Illustration'}
    />
    <div className="afg-row">
      <div className="afg-col-xs-12 afg-col-sm-4">
        <SubHeader title="Robust documentation"/>
        <p className="spectrum-Body2">Spectrum CSS is designed to be used in partnership with Spectrum’s detailed usage guidelines.</p>
      </div>
    </div>
  </div>
)

export default Home
