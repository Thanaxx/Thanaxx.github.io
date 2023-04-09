import React from 'react';
import {RiArrowRightSLine} from 'react-icons/ri';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../../styles/Carousel.css';
import cData from '../../data/mainCarousel';

function MainCarousel() {
  return (
    <>
        <div className="carousel-wrap">
            <div>
                <Carousel className='carousel'
                    width dynamicHeight={true}
                    autoPlay={true}
                    stopOnHover={false}
                    showArrows={false}
                    showThumbs={false}
                    infiniteLoop={true}
                    fade={true}
                    showStatus={false}
                    transition={1500}
                    swipeable={false}
                    animationHandler='fade'
                    >

                    {cData.map((item, index) => (
                        <div key={index}>
                            <div className='cell'>
                                <img src={item.carouselImg} alt="Carousel" />
                            </div>
                        </div>
                    ))}

                </Carousel>
            </div>

            <div className="benefits">
                <h1>MEMBERSHIP BENEFITS</h1>
                <p>Join Victoria Sports Club to enjoy these benefits.</p>
                <a href="/membership"><button className='mem-benefit'><p>VIEW MEMBERSHIP BENEFITS</p><RiArrowRightSLine className='car-arrow' /></button></a>
            </div>
        </div>
    </>
  )
}

export default MainCarousel