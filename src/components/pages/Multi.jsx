import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Multi.scss'
import img3 from '../../Assets/k1.jpeg'

export const Multi = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className='multi'>
        <div className='uhf'  data-aos="zoom-out-up"> <h1>Popular Destinations</h1></div>
        <Carousel responsive={responsive}>
            <div className='cds' data-aos="fade-right"
 data-aos-offset="300"
 data-aos-easing="ease-in-sine" >
                <img src="https://static.wanderon.in/wp-content/uploads/2024/04/bangkok-min.jpg"
                />
            </div>
            <div className='cds'>
                <img src={img3}
                />

            </div>
            <div className='cds' data-aos="fade-left"

 data-aos-offset="300"
 >
                <img src="https://assets.traveltriangle.com/blog/wp-content/uploads/2017/10/Dubai-Fountains.jpg?tr=w-400"
                />

            </div>
            <div className='cds'>
                <img src="https://w0.peakpx.com/wallpaper/838/716/HD-wallpaper-welcome-to-maldives-romantic-blue-night-maldives.jpg"
                />

            </div>
            <div className='cds'>
                <img src="https://www.namasteindiatrip.com/blog/wp-content/uploads/2022/03/Skyye.jpg"
                />

            </div>
            <div className='cds'>
                <img src="https://static.thehoneycombers.com/wp-content/uploads/sites/4/2016/09/FI1.jpg"
                />

            </div>
            <div className='cds'>
                <img src="https://marinabeachclub.com/wp-content/uploads/2018/10/MG_2313.jpg" />

            </div>
            <div className='cds'>
                <img src="https://www.fabhotels.com/blog/wp-content/uploads/2019/02/600x400-15.jpg"
                />

            </div>
            <div className='cds'>
                <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5e/32/21/caption.jpg?w=500&h=400&s=1"
                />

            </div>
        </Carousel>;
    </div>
    )
}
