import React from 'react';
// import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../../styles/Hero.css';
import '../../styles/CarouselExtend.css';
import '../../styles/about.css';
import '../../styles/Inquiry.css';

function AboutCarousel() {
  return (
     <>

        <div className="hero-wrap" data-aos="fade">
            <div className="hero-img">
                <img src="/vscimages/hero/contact.webp" alt="Tennis Court" />
            </div>
        </div>

        <div className='aboutDesc' data-aos="fade-up">
              <p>
                Victoria Sports aims to be a one-stop training facility for fitness enthusiasts and athletes.
                Our membership benefits ensure that we fit every active lifestyle. Enjoy access to a 50-meter
                indoor lap pool, six private gyms and complete beauty and wellness facilities, it is the
                largest indoor sports facility in the Philippines.
              </p>
        </div>
    </>
  )
}

export default AboutCarousel