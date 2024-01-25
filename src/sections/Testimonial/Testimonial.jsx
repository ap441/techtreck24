import { RiDoubleQuotesL } from 'react-icons/ri'
import './Testimonial.css'

const Testimonial = () => {
  return (
    <section id='testimonial'>
          <div className="title">
            <h2>Testimonial</h2>
          </div>
          <div className="testimonial-container container">
            <div className="testimonial-card">
              <img src='/cstmr1.png' alt='' />
              <h4>Amber</h4>
              <h5>Outrider - Monstadt</h5>
              <div className="quotes">
                <RiDoubleQuotesL/>
              </div>
              <p>Got this watch, and it's seriously fire! The design is top-notch, just like my precision with a bow. Fast and smooth order on the ecommerce platform — they delivered it faster than I can shoot an arrow! Totally recommending this slick watch and the platform's awesome service!</p>
            </div>
            <div className="testimonial-card">
              <img src='/cstmr2.png' alt='' />
              <h4>Zhongli</h4>
              <h5>Consultant - Wangsheng Funeral Parlour</h5>
              <div className="quotes">
                <RiDoubleQuotesL/>
              </div>
              <p>Delighted with this exquisite coat; its craftsmanship mirrors the precision I appreciate. The elegance and functionality resonate with my taste. The ecommerce platform's seamless service aligns perfectly with the standards I hold dear. Recommending both the coat and the platform for their remarkable performance.</p>
            </div>
        </div>
    </section>
  )
}

export default Testimonial