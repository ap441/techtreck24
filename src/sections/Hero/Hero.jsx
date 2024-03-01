import React, { useState, useEffect } from 'react';
import './Hero.css';
import CountUp from 'react-countup';

const Hero = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const videoSources = [
    '/vid.mp4',
    '/vid2.mp4',
    '/vid3.mp4',
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoSources.length);
    }, 5000);
    console.log(currentVideoIndex);
    return () => clearInterval(intervalId);
  }, []);


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
          <div className="hero-right-container">
          { currentVideoIndex==0 &&  <video
              autoPlay
              loop
              muted
              playsInline
              className="herovid"
            >
              <source src="/vid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>}
            { currentVideoIndex==1 && <video
              autoPlay
              loop
              muted
              playsInline
              className="herovid"
            >
              <source src="/vid2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>}
            { currentVideoIndex==2 &&  <video
              autoPlay
              loop
              muted
              playsInline
              className="herovid"
            >
              <source src="/vid3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
