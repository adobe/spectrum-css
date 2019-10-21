import DoubleTextWithVisual from '../components/DoubleTextWithVisual'
import {Helmet} from "react-helmet";
import HeroImage from '../components/HeroImage';
import Link from '@react/react-spectrum/Link';
import RouterLink from "next/link";
import PageHeader from '../components/PageHeader';
import React from 'react'
import SubHeader from '../components/SubHeader';
import styles from '../css/homepage.scss';
import classNames from "classnames";

const Home = () => (
  <div style={{overflow: 'hidden', position: "relative"}}>
    <Helmet>
      <meta name="Description" content=""/>
      <title>Spectrum CSS</title>
    </Helmet>
    <PageHeader title="Meet Spectrum CSS"/>
    <p className={classNames("spectrum-Body2", styles.description)}>Spectrum CSS is an open-source implementation of Spectrum, Adobe’s design system. It includes components and resources to make applications more cohesive.</p>
    <HeroImage
      desktop={{
        description: "Spectrum CSS Hero image",
        file: {
          contentType: "image/png",
          details: {
            image: {
              width: 1952,
              height: 891,
            },
            size: 290381,
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
      <div className={classNames("afg-col-xs-12", "afg-col-sm-6", styles.homecard)}>
        <img src={`${process.env.BACKEND_URL}/static/images/illustration_documentation.svg`} width="100" height="80"/>
        <div>
          <SubHeader title="Robust documentation"/>
          <p className="spectrum-Body3">Spectrum CSS is designed to be used in partnership with Spectrum’s detailed usage guidelines.</p>
          <p className="spectrum-Body3"><Link href="https://spectrum.adobe.com/">View Spectrum guidelines</Link></p>
        </div>
      </div>
      <div className={classNames("afg-col-xs-12", "afg-col-sm-6", styles.homecard)}>
        <img src={`${process.env.BACKEND_URL}/static/images/illustration_flexible.svg`} width="100" height="80"/>
        <div>
          <SubHeader title="Flexible"/>
          <p className="spectrum-Body3">Our CSS is customizable, powerful, and designed to work with any javascript framework.</p>
          <p className="spectrum-Body3"><RouterLink href={`/get-started/`} as={`${process.env.BACKEND_URL}/get-started/`}><a className="spectrum-Link">Get Started</a></RouterLink></p>
        </div>
      </div>
    </div>
    <div className="afg-row">
      <div className={classNames("afg-col-xs-12", "afg-col-sm-6", styles.homecard)}>
        <img src={`${process.env.BACKEND_URL}/static/images/illustration_tested.svg`} width="100" height="80"/>
        <div>
          <SubHeader title="Rigorously tested"/>
          <p className="spectrum-Body3">These individually-versioned components have been vetted to be accessible and inclusive of global audiences.</p>
        </div>
      </div>
      <div className={classNames("afg-col-xs-12", "afg-col-sm-6", styles.homecard)}>
        <img src={`${process.env.BACKEND_URL}/static/images/illustration_responsive.svg`} width="100" height="80"/>
        <div>
          <SubHeader title="Multi-platform support"/>
          <p className="spectrum-Body3">We support evergreen browsers (minus one version) and IE 11 for scalability and flexibility.</p>
          <p className="spectrum-Body3"><Link href="https://spectrum.adobe.com/">View Spectrum guidelines</Link></p>
        </div>
      </div>
    </div>
  </div>
)

export default Home
