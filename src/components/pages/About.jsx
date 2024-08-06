import React from 'react'

const About = () => {
  return (
    <div>
        <section class="explore-section" id="explore-section" >
        <div className='hd'><h1 class="top">Explore the world</h1></div> 
              <p class="mid" data>Experience a brand-new country with incredible new outlooks, customs and activities.<br></br>Travel is a journey of discovery helping us to explore new places, meet new people, and learn about ourselves and the world around us. Let's explore the world together!</p>


                <div class="tours-container">
                    <div class="tour-card" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                        <img src="https://www.travelawaits.com/wp-content/uploads/2022/05/Melbourne-And-Sydney-Side-By-Side-1.png?resize=800%2C800" class="tour-img" alt="tour-image"/>
                            <div class="tour-body">
                                <h3 class="tour-name">Australia</h3>
                            </div>
                    </div>

                    <div class="tour-card" data-aos="fade-right"  data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                        <img src="https://wishtravelers.com/wp-content/uploads/2023/04/2.jpg" class="tour-img" alt="tour-image"/>
                            <div class="tour-body">
                                <h3 class="tour-name">Maldives</h3>
                            </div>
                    </div>

                    <div class="tour-card" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" >
                        <img src="https://t4.ftcdn.net/jpg/02/96/15/35/360_F_296153501_B34baBHDkFXbl5RmzxpiOumF4LHGCvAE.jpg" class="tour-img" alt="tour-image"/>
                            <div class="tour-body">
                                <h3 class="tour-name">Paris</h3>
                               
                            </div>
                    </div>

                    <div class="tour-card" data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                        <img src="https://www.doing-business-international.com/wp-content/uploads/2023/01/image.png" class="tour-img" alt="tour-image"/>
                            <div class="tour-body">
                                <h3 class="tour-name">Singapore</h3>
                            </div>
                    </div>

                    <div class="tour-card" data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                        <img src="https://thumbs.dreamstime.com/b/red-fort-lal-qila-indian-flag-delhi-india-famous-travel-tourist-landmark-symbol-world-heritage-site-71309387.jpg" class="tour-img" alt="tour-image"/>
                            <div class="tour-body">
                                <h3 class="tour-name">India</h3>
                            </div>
                    </div>

                    <div class="tour-card" data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                        <img src="https://cdn.kimkim.com/files/a/images/883e09af9f01e59a34ad3af6e13203450b8d7095/original-465a6f2de6f9b6a9cea4522162f26de1.jpg" class="tour-img" alt="tour-image"/>
                            <div class="tour-body">
                                <h3 class="tour-name">Italy</h3>
                            </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default About