import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Slider.scss'
import img from '../../Assets/Slide1.jpeg'
import img1 from '../../Assets/norway.jpg'
import img2 from '../../Assets/landscape.jpg'

const Slider = () => {
  return (
    <>
    <Carousel>
      <Carousel.Item className='shape'>
        <img className="d-block w-100" src={img}/>
        <Carousel.Caption>
          <h3>Unlock Your Travel Dreams With Us!</h3>
          <p>Travel is more than the seeing of sights and a change that goes on deep in the ideas of living</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='shape'>
      <img className="d-block w-100" src={img1}/>
        <Carousel.Caption>
          <h3>Unlock Your Travel Dreams With us!</h3>
          <p>Travel is more than the seeing of sights and a change that goes on deep in the ideas of living</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='shape'>
      <img className="d-block w-100" src={img2}/>
        <Carousel.Caption>
          <h3>Unlock Your Travel Dreams With us!</h3>
          <p>
          Travel is more than the seeing of sights and a change that goes on deep in the ideas of living
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel></>
  )
}

export default Slider