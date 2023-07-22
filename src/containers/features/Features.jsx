import React from 'react'
import './features.css'
import Feature from '../../components/feature/Feature'

const featuresData = [
  {
    title: 'Individual approach',
    text: 'The specialist evaluates all the technical parameters of the facility, including coverage by area, height of buildings, the presence of obstacles, communication schemes, the locations of video cameras, video recorder, and the passage of cable channels are agreed upon.',
  },
  {
    title: 'Modern equipment',
    text: 'We use only proven and high-quality equipment.',
  },
  {
    title: 'Operational technical support',
    text: 'Technical support specialists in real time will be able to advise you on all technical issues, as well as go to the site at a convenient time for you to troubleshoot.',
  },
  {
    title: 'Team of professionals',
    text: 'Our team consists of highly qualified specialists who are ready to design, install and configure video surveillance at an object of any complexity.',
  },
];

const Features = () => (
  <div className="camvid__features section__padding" id="whyus">
    <div className="camvid__features-heading">
      <h1 className="gradient__text">Benefits of working with us</h1>
      <p>Fill up the form to get started</p>
    </div>
    <div className="camvid__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);


export default Features