import React from 'react'
import CountUp from 'react-countup'

const Service = () => {
    return (
        <div>
            <section class="services-section" id="services" data-aos="fade-up"  data-aos-duration="800">
                <div className='titl'>  <h1 class="text-centre" >Why With Us ?</h1></div>
                <p class="section-para" data-aos="fade-up" data-aos-duration="800"></p>
                <div class="serives-grid">
                    <div class="service-card" data-aos="fade-up">
                        <div class="circle"></div>
                        <i class="fa-solid fa-earth-americas card-icon"></i>
                        <p class="service-text">We are based all over the world</p>
                    </div>
                    <div class="service-card" data-aos="fade-up">
                        <div class="circle"></div>
                        <i class="fa-solid fa-coins card-icon"></i>
                        <p class="service-text">Travel the World,Without thinking</p>
                    </div>
                    <div class="service-card" data-aos="fade-up">
                        <div class="circle"></div>
                        <i class="fa-solid fa-book-open card-icon"></i>
                        <p class="service-text">Get to know about local cultures</p>
                    </div>
                    <div class="service-card" data-aos="fade-up">
                        <div class="circle"></div>
                        <i class="fa-solid fa-person-snowboarding card-icon"></i>
                        <p class="service-text">Have you best experience</p>
                    </div>
                </div>

                <div class="bg-circle"></div>
                <div className='counter'>

                    <div className='FlexCenter stats'>
                        <div className='flexColCenter stat'>

                            <span>
                                <CountUp start={1500} end={3500} duration={4} />
                                <span id='plus'>+</span>
                            </span> <br />
                            <span className='p'>premium packages</span>
                        </div>
                    </div>

                    <div className='FlexCenter stats'>
                        <div className='flexColCenter stat'>

                            <span>
                                <CountUp start={8654} end={15320} duration={4} />
                                <span id='plus'>+</span>
                            </span> <br />
                            <span className='p'>Happy Customers</span>
                        </div>

                    </div>

                    <div className='FlexCenter stats'>
                        <div className='flexColCenter stat'>

                            <span>
                                <CountUp start={2} end={34} duration={4} />
                                <span id='plus'>+</span>
                            </span> <br />
                            <span className='p'>Award Winnings</span>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    )
}

export default Service