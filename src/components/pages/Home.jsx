import React from 'react'
import Services from './Services'
import Contact from './Contact'
import Slider from './Slider'
import About from './About'
import { Multi } from './Multi'
import Card from './Card'
import Sponsor from './Sponsor'
import Gotop from './Gotop'


const Home = () => {
  return (
    <>
      <Slider />
      <Card />
      <Multi />
      <About />
      <Services />
      <Sponsor/>
      <Gotop/>
      <Contact />
      
    </>
  )
}

export default Home