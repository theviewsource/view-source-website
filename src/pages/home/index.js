import React from "react"
import { Helmet } from 'react-helmet';

import SEO from "../../components/seo"

import logoVertical from '../../assets/images/logos.png';
import heart from '../../assets/images/heart.svg';

import './style.scss';

const JSONLD = () => (
  <Helmet>
    <script type="application/ld+json">
      { `
        {
          "@context": "http://schema.org",
          "@type": "Organization",
          "legalName": "ViewSource",
          "url": "https://viewsource.pl",
          "logo": "https://viewsource.pl/icons/icon-512x512.png",
          "sameAs": [
            "https://www.facebook.com/the.view.source",
            "https://twitter.com/theviewsource",
            "https://www.instagram.com/view.source/"
          ]
        }
      ` }
    </script>

    <script type="application/ld+json">
      { `
        {
          "@context": "http://schema.org",
          "@type": "WebSite",
          "name": "ViewSource.pl",
          "url": "https://viewsource.pl"
        }
      ` }
    </script>
  </Helmet>
);

const HomePage = () => (
  <>
    <div className="Home">
      <SEO title="View Source" />
      <img src={ logoVertical} alt="View Source vertical logo"/>
      <p className="Home__text">
        Welcome to the ViewSource, we will be at your disposal shortly.
        <img src={ heart} alt="Heart" className="Home__icon" />
      </p>
    </div>
    <JSONLD />
  </>
)

export default HomePage
