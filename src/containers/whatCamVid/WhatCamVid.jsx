import React from 'react'
import { Feature } from '../../components'
import './whatcamvid.css'

const WhatCamVid = () => {
  return (
    <div className="camvid__whatcamvid section__margin" id="whyneed">

    <div className="camvid__whatcamvid-heading">
      <h1 className="gradient__text">Why you need video surveillance</h1>
    </div>
    <div className="camvid__whatcamvid-container">
      <Feature title="Crime Prevention" text="In most cases, having seen video surveillance cameras, the criminal will prefer to choose another, less secure object. Otherwise, the cameras will become an excellent evidence base and will help the investigation in catching the criminal." />
      <Feature title="Service quality control" text="Installation of video surveillance will help to remotely monitor the office, shop, cafe, bar, residential facility, monitor labor productivity and quality of service." />
      <Feature title="Control of financial transactions" text="Surveillance cameras allow you to effectively uncover fraudulent schemes and significantly reduce store losses due to dishonest or simply inattentive employees and visitors." />

    </div>
  </div>
  )
}

export default WhatCamVid