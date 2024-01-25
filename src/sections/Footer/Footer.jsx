import { RiMailFill, RiMapPinFill, RiPhoneFill } from 'react-icons/ri'
import './Footer.css'

const Footer = () => {
  return (
    <section id="contact">
        <div className="footer-container container">
          <div className="footer-box">
            <div className="footer-title">Promo</div>
            <img src='/footer.png' alt='' />
            <h4>The New Beast of The Gaming World</h4>
            <p>Promo from January 25 2024</p>
          </div>
          <div className="footer-box">
            <div className="footer-title">Quick Links</div>
            <div className="footer-row">
              <div className="col">
                <li><a href="">Sell Online</a></li>
                <li><a href="">Features</a></li>
                <li><a href="">Categories</a></li>
                <li><a href="">Deals</a></li>
                <li><a href="">Latest Trends</a></li>
              </div>
              <div className="col">
                <li><a href="">Brands</a></li>
                <li><a href="">Return</a></li>
                <li><a href="">Privacy Policy</a></li>
                <li><a href="">deals</a></li>
                <li><a href="">trends</a></li>
              </div>
              <div className="col">
                <li><a href="">Best Sales</a></li>
                <li><a href="">New Products</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Terms of Service</a></li>
                <li><a href="">Latest Trents</a></li>
              </div>
            </div>
          </div>
          <div className="footer-box">
            <h5 className="footer-title">Contact us</h5>
            <p><span><RiMapPinFill/></span> 1892 XYZ street Mars</p>
            <p><span><RiPhoneFill/></span> 8888888888 </p>
            <p><span><RiMailFill/></span> why@gmail.com</p>
          </div>
        </div>
    </section>
  )
}

export default Footer