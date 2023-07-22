import React from 'react'
import './cameras.css'

const Cameras = ({title, image, price}) => {
  return (
    <div className='camvid__cameras-container'>
    <div className='camvid__cameras-container_title'>
      <p>{title}</p>
    </div>
    <div className='camvid__cameras-container_image'>
      <img src={image} alt='Cameras' />
    </div>
    <div className='camvid__cameras-container_image'>
      <p>{price}</p>
    </div>
    </div>
  )
}

export default Cameras