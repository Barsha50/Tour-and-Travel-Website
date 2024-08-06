import React from 'react'
import './Card.css'
import { toast } from 'react-toastify'
const Card = () => {
  const al = () => {
    toast.error("Please Login First")
  }
  return (
    <>
    <div className='dp'>
        <div className='op'>
          <h1> Exciting Packages</h1>
        </div>
        <div class="card-container">



          <div class="card" data-aos="fade-up"
            data-aos-duration="4000">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/1d/Taj_Mahal_%28Edited%29.jpeg" />
            <div class="card-content">
              <h2 class="destination-name">TAJMAHAL</h2>
              <li ><i class="fa-solid fa-indian-rupee-sign"></i> 4999/-  </li>
              <div class="rating">
                <span>⭐⭐⭐⭐⭐19(250)</span><hr></hr>
              </div>

              <ul id='ul'>
                <li class="pri1"><i class="fa-solid fa-hotel"></i>  Hotels </li>
                <li class="pri2"><i class="fa-solid fa-plane-departure"></i>  Flight<br /></li>
                <li class="pri3"><i class="fa-solid fa-utensils"></i>  Food</li>
              </ul>
              <div class="wrapper">
                <button className='button' onClick={al}>
                  Book Now!
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>


          <div class="card" data-aos="fade-up"
            data-aos-duration="4000">
            <img src="https://www.oyorooms.com/travel-guide/wp-content/uploads/2021/05/Visit-in-Kolkata-1.jpg" />
            <div class="card-content">
              <h2 class="destination-name">KOLKATA</h2>
              <li ><i class="fa-solid fa-indian-rupee-sign"></i> 6999/-  </li>
              <div class="rating">
                <span>⭐⭐⭐⭐⭐19(250)</span><hr></hr>
              </div>

              <ul id='ul'>
                <li class="pri1"><i class="fa-solid fa-hotel"></i>  Hotels </li>
                <li class="pri2"><i class="fa-solid fa-plane-departure"></i>  Flight<br /></li>
                <li class="pri3"><i class="fa-solid fa-utensils"></i>  Food</li>
              </ul>
              <div class="wrapper">
                <button className='button' onClick={al}>
                  Book Now!
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>



          <div class="card" data-aos="fade-down"
          >
            <img src="https://images.pexels.com/photos/12750077/pexels-photo-12750077.jpeg?cs=srgb&dl=pexels-tauseefkhaliq-12750077.jpg&fm=jpg1" />
            <div class="card-content">
              <h2 class="destination-name">KASHMIR</h2>
              <li ><i class="fa-solid fa-indian-rupee-sign"></i> 24999/-  </li>
              <div class="rating">
                <span>⭐⭐⭐⭐⭐49(250)</span><hr></hr>
              </div>

              <ul id='ul'>
                <li class="pri1"><i class="fa-solid fa-hotel"></i>  Hotels </li>
                <li class="pri2"><i class="fa-solid fa-plane-departure"></i>  Flight<br /></li>
                <li class="pri3"><i class="fa-solid fa-utensils"></i>  Food</li>
              </ul>
              <div class="wrapper">
                <button className='button' onClick={al}>
                  Book Now!
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>



          <div class="card" data-aos="fade-up"
            data-aos-duration="4000">
            <img src="https://thecarvaanresort.com/wp-content/uploads/2022/07/2022-07-28-1024x666.png" />
            <div class="card-content">
              <h2 class="destination-name">RAJASTHAN</h2>
              <li ><i class="fa-solid fa-indian-rupee-sign"></i> 7999/-  </li>
              <div class="rating">
                <span>⭐⭐⭐⭐⭐19(250)</span><hr></hr>
              </div>

              <ul id='ul'>
                <li class="pri1"><i class="fa-solid fa-hotel"></i>  Hotels </li>
                <li class="pri2"><i class="fa-solid fa-plane-departure"></i>  Flight<br /></li>
                <li class="pri3"><i class="fa-solid fa-utensils"></i>  Food</li>
              </ul>
              <div class="wrapper">
                <button className='button' onClick={al}>
                  Book Now!
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>



          <div class="card" data-aos="fade-up"
            data-aos-duration="4000">
            <img src="https://static.independent.co.uk/2022/04/26/15/Bangkok-Wat%20Arun%20Ratchawararam%20Ratchaworamahawihan%20%28%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%AD%E0%B8%A3%E0%B8%B8%E0%B8%93%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%A7%E0%B8%A3%E0%B8%B2%E0%B8%A3%E0%B8%B2%E0%B8%A1%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%A7%E0%B8%A3%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A7%E0%B8%B4%E0%B8%AB%E0%B8%B2%E0%B8%A3%29%20191054MC.jpg" />
            <div class="card-content">
              <h2 class="destination-name">BANGKOK</h2>
              <li ><i class="fa-solid fa-indian-rupee-sign"></i> 19999/-  </li>
              <div class="rating">
                <span>⭐⭐⭐⭐⭐19(250)</span><hr></hr>
              </div>

              <ul id='ul'>
                <li class="pri1"><i class="fa-solid fa-hotel"></i>  Hotels </li>
                <li class="pri2"><i class="fa-solid fa-plane-departure"></i>  Flight<br /></li>
                <li class="pri3"><i class="fa-solid fa-utensils"></i>  Food</li>
              </ul>
              <div class="wrapper">
                <button className='button' onClick={al}>
                  Book Now!
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>



          <div class="card" data-aos="fade-right">
            <img src="https://www.shutterstock.com/image-photo/darjeeling-india-05012022-himalayan-railway-600nw-2157286535.jpg" />
            <div class="card-content">
              <h2 class="destination-name">DARJEELING</h2>
              <li ><i class="fa-solid fa-indian-rupee-sign"></i> 7999/-  </li>
              <div class="rating">
                <span>⭐⭐⭐⭐⭐19(250)</span><hr></hr>
              </div>

              <ul id='ul'>
                <li class="pri1"><i class="fa-solid fa-hotel"></i>  Hotels </li>
                <li class="pri2"><i class="fa-solid fa-plane-departure"></i>  Flight<br /></li>
                <li class="pri3"><i class="fa-solid fa-utensils"></i>  Food</li>
              </ul>
              <div class="wrapper">
                <button className='button' onClick={al}>
                  Book Now!
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>



          <div class="card" data-aos="fade-right">
            <img src="https://www.arkitera.com/wp-content/uploads/2022/02/MOTF-Dusk.jpg" />
            <div class="card-content">
              <h2 class="destination-name">DUBAI</h2>
              <li ><i class="fa-solid fa-indian-rupee-sign"></i> 49999/-  </li>
              <div class="rating">
                <span>⭐⭐⭐⭐⭐19(250)</span><hr></hr>
              </div>

              <ul id='ul'>
                <li class="pri1"><i class="fa-solid fa-hotel"></i>  Hotels </li>
                <li class="pri2"><i class="fa-solid fa-plane-departure"></i>  Flight<br /></li>
                <li class="pri3"><i class="fa-solid fa-utensils"></i>  Food</li>
              </ul>
              <div class="wrapper">
                <button className='button' onClick={al}>
                  Book Now!
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>



          <div class="card" data-aos="fade-down">
            <img src="https://www.savaari.com/blog/wp-content/uploads/2021/12/1024px-Mumbai_Aug_2018_43397784544-1024x761.jpg" />
            <div class="card-content">
              <h2 class="destination-name">MUMBAI</h2>
              <li ><i class="fa-solid fa-indian-rupee-sign"></i> 7999/-  </li>
              <div class="rating">
                <span>⭐⭐⭐⭐⭐19(250)</span><hr></hr>
              </div>

              <ul id='ul'>
                <li class="pri1"><i class="fa-solid fa-hotel"></i>  Hotels </li>
                <li class="pri2"><i class="fa-solid fa-plane-departure"></i>  Flight<br /></li>
                <li class="pri3"><i class="fa-solid fa-utensils"></i>  Food</li>
              </ul>
              <div class="wrapper">
                <button className='button' onClick={al}>
                  Book Now!
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>


          <div class="card" data-aos="fade-left">
            <img src="https://www.flamingotravels.co.in/_next/image?url=https%3A%2F%2Fimgcdn.flamingotravels.co.in%2FImages%2FCountry%2Fswitzerland-best-time-to-visit.jpg&w=1080&q=75" />
            <div class="card-content">
              <h2 class="destination-name">SWITZERLAND</h2>
              <li ><i class="fa-solid fa-indian-rupee-sign"></i>99999/-  </li>
              <div class="rating">
                <span>⭐⭐⭐⭐⭐19(250)</span><hr></hr>
              </div>

              <ul id='ul'>
                <li class="pri1"><i class="fa-solid fa-hotel"></i>  Hotels </li>
                <li class="pri2"><i class="fa-solid fa-plane-departure"></i>  Flight<br /></li>
                <li class="pri3"><i class="fa-solid fa-utensils"></i>  Food</li>
              </ul>
              <div class="wrapper">
                <button className='button' onClick={al}>
                  Book Now!
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>




          <div class="card" data-aos="fade-left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/56/Kedarnath_Temple_in_Rainy_season.jpg" />
            <div class="card-content">
              <h2 class="destination-name">KEDARNATH</h2>
              <li ><i class="fa-solid fa-indian-rupee-sign"></i> 14999/-  </li>
              <div class="rating">
                <span>⭐⭐⭐⭐⭐19(250)</span><hr></hr>
              </div>

              <ul id='ul'>
                <li class="pri1"><i class="fa-solid fa-hotel"></i>  Hotels </li>
                <li class="pri2"><i class="fa-solid fa-plane-departure"></i>  Flight<br /></li>
                <li class="pri3"><i class="fa-solid fa-utensils"></i>  Food</li>
              </ul>
              <div class="wrapper">
                <button className='button' onClick={al}>
                  Book Now!
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Card