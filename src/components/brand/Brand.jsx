import React from 'react'
import './brand.css'
import Cameras from '../cameras/Cameras'
import Camera0 from '../../assets/camera0.webp'
import Camera1 from '../../assets/camera1.webp'
import Camera2 from '../../assets/camera2.webp'
import Camera3 from '../../assets/camera3.webp'

const cameraData = [
  {
    title: "Hikvision HiWatch HWI-B121H",
    image: Camera0,
    price: "69.99 $",
  },
  {
    title: "Nedis WIFICO11CWT",
    image: Camera1,
    price: "51.99 $"
  },
  {
    title: "HiLook IPC-D140H",
    image: Camera2,
    price: "79.99 $"
  },
  {
    title: "EZVIZ C8C",
    image: Camera3,
    price: "74.99 $"
  }
]

const Brand = () => {
  return (
    <div className='camvid__brand-cameras'>
    <h1 className='camvid__brand-cameras_title gradient__text'>Our best products</h1>
    <div className='camvid__brand-cameras_container'>
      {cameraData.map((item, index) => (
        <Cameras title={item.title} image={item.image} price={item.price} key={item.title + index} />
      ))}
      
    </div>
    </div>
    
  )
}

export default Brand