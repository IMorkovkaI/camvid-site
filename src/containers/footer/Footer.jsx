import React from 'react'
import './footer.css'

const Footer = () => (
  <div className="camvid__footer section__padding">
    <div className="camvid__footer-links">
      <div className="camvid__footer-links_div">
        <h4>Company</h4>
        <p>About</p>
        <p>Privacy Policy</p>
        <p><a href='#contact'>Contact</a></p>
      </div>
      <div className="camvid__footer-links_div">
        <h4>Get in touch</h4>
        <p>+420 774 889 559</p>
        <p>camvid@info.com</p>
      </div>
    </div>

    <div className="camvid__footer-copyright">
      <p>@2023 CamVid. All rights reserved.</p>
    </div>
  </div>
);

export default Footer