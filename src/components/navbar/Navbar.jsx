
import React, { useState } from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo-no-background.png'



const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="camvid__navbar">
      <div className="camvid__navbar-links">
        <div className="camvid__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="camvid__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#catalog">Products</a></p>
          <p><a href="#whyneed">Why you need CCTV cameras</a></p>
          <p><a href="#whyus">Why us</a></p>
          
        </div>
      </div>
      <div className="camvid__navbar-sign">
        <button type="button">Contact</button>
      </div>
      <div className="camvid__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="camvid__navbar-menu_container scale-up-center">
          <div className="camvid__navbar-menu_container-links">
          <p><a href="#home">Home</a></p>
          <p><a href="#catalog">Products</a></p>
          <p><a href="#whyneed">Why you need CCTV cameras</a></p>
          <p><a href="#whyus">Why us</a></p>
          
          </div>
          <div className="camvid__navbar-menu_container-links-sign">
            <button type="button">Contact</button>
          </div>
        </div>
        )}
      </div>
    </div>
  )
}

export default Navbar