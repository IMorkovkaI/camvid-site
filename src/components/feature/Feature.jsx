import React from 'react'
import './feature.css'

const Feature = ({ title, text }) => (
  <div className="camvid__features-container__feature">
    <div className="camvid__features-container__feature-title">
      
      <h1>{title}</h1>
    </div>
    <div className="camvid__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Feature