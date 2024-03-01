import { RiMailFill, RiMapPinFill, RiPhoneFill } from 'react-icons/ri'
import './Footer.css'

const Footer = () => {
  return (
    <section id="contact">
        <div className="footer-container container">
          <div className="footer-box">
            <div className="footer-title">Promo</div>
            <a href='https://www.worldfashionexchange.com/blog/what-is-sustainable-fashion-why-fashion-brands-need-to-be-more-sustainable/' target='_blank'><img src='/footer.png' alt='' /></a>
            <h4><a href='https://www.worldfashionexchange.com/blog/what-is-sustainable-fashion-why-fashion-brands-need-to-be-more-sustainable/' target='_blank'>What is sustainable fashion? Why fashion brands need to be sustainable</a></h4>
            <p>Promo from March 1 2024</p>
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