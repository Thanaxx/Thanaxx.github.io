import React from 'react';
import Video from 'react-responsive-video';
import TempoVideo from '../../video/MainVid.mp4';
import '../../styles/Hero.css';

function HeroVid() {
  return (
    <>
        <div className='heropage-wrap' data-aos="fade">
            <div className='hero-vid'>
                {/**<Video mp4={vsclubvid} /> */}
                <Video mp4={TempoVideo} />

                {/**
                  <div className='member-btn'>
                    <a href="/membership"><button>BE A MEMBER NOW! <i></i> </button></a>
                  </div>
                */}

                <div className="member-head-title">
                  <div className="head-label">
                    <p className='head-caption'>YOUR FITNESS AND WELLNESS JOURNEY BEGINS HERE</p>
                  </div>

                  <div className='member-btn'>
                    <a href="/membership"><button>BE A MEMBER NOW! <i></i> </button></a>
                  </div>
                </div>

                <div className='heroDesc'>
                  <p data-aos="fade-up">
                      Our space offers you access to a multititude of sports facilities and state-of-the-art fitness equipment to cater to your active lifestyle. Whether you want to spend a night bowling 
                      with your family, relax in our water spa pools, play a game of tennis
                      or join studio classes, we’ve got you covered.
                  </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default HeroVid