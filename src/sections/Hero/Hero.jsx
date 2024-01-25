import { useState } from 'react'
import CoatCard from '../../components/CoatCard'
import './Hero.css'
import { coatsData } from '../../constants'
import coat1 from '/coat1.png'
import CountUp from 'react-countup'

const Hero = () => {
  const [coatImg, setcoatImg] = useState(coat1)
  return (
    <section id="hero">
      <div className="hero-container container">
        <div className="hero-left">
          <h1>Find Your Fling!</h1>
          <p>Discover Your Essentials, Navigating a World of Perfect Finds. Uncover Your Must-Haves: Your Ultimate Product Search Begins Here.</p>
          <button className='btn'>Shop now</button>
          <div className="hero-stats">
            <div className="stat-box">
              <span>
                <CountUp start={1400} end={1500} duration={4}/>
                <p>+</p>
              </span>
              <span>Brands</span>
            </div>
            <div className="stat-box">
              <span>
                <CountUp start={350} end={500} duration={4}/>
                <p>+</p>
              </span>
              <span>Outlets</span>
            </div>
            <div className="stat-box">
              <span>
                <CountUp start={98700} end={99000} duration={4}/>
                <p>+</p>
              </span>
              <span>Customers</span>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <img src={coatImg} alt='wagon'></img>
          <div className="hero-right-container">
            {
              coatsData.map((coat, i) => (
                <div key={i}>
                  <CoatCard
                  imgURL={coat}
                  changeCoatImage={(coat) => setcoatImg(coat)}
                  coatImg={coatImg}
                  />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero