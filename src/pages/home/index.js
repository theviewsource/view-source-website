import React from "react"

import SEO from "../../components/seo"

import logoVertical from '../../assets/images/logos.png';
import heart from '../../assets/images/heart.svg';

import './style.scss';

const HomePage = () => (
  <div className="Home">
    <SEO title="View Source" />
    <img src={ logoVertical} alt="View Source vertical logo"/>
    <p className="Home__text">
      Welcome to the ViewSource, we will be at your disposal shortly.
      <img src={ heart} alt="Heart" className="Home__icon" />
    </p>
  </div>
)

export default HomePage
