import { assets } from '../../assets/assets'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
          <img src={assets.logo}/>
          <p>Footer content</p>
          <div className='social-icons'>
            <img src={assets.facebook_icon}/>
            <img src={assets.twitter_icon}/>
            <img src={assets.linkedin_icon}/>
          </div>
        </div>
        <div className='footer-content-center'>
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className='footer-content-right'>
          <h2>Get in Touch</h2>
          <ul>
            <li>
              +971-04-867456
            </li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr/>
      <p className="footer-copyright">
        Copyright 2024 Tomato.com - All rights reserved
      </p>
      
    </div>
  )
}

export default Footer
