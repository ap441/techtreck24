import React from 'react'
import Navbar from './sections/navbar/Navbar'
import Hero from './sections/Hero/Hero'
import Categories from './sections/Categories/Categories'
import Shop from './sections/Shop/Shop'
import Deal from './sections/Deal/Deal'
import Testimonial from './sections/Testimonial/Testimonial'
import Blog from './sections/Blog/Blog'
import Footer from './sections/Footer/Footer'

const App = () => {
  return (
    <main className='app'>
      <Navbar/>
      <Hero/>
      <Categories/>
      <Shop/>
      <Deal/>
      <Testimonial/>
      <Blog/>
      <Footer/>
    </main>
  )
}

export default App