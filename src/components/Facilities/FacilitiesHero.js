import React from 'react';
import '../../styles/Facilities.css';

function FacilitiesHero() {
  return (
    <>
        <div className="hero-wrap" data-aos="fade">
            <div className="hero-img">
                <img src="/vscimages/facilities/Facilities.webp" alt="facilities" />

                <div className="facility-modal">
                  <h1>Member Benefits</h1>
                  <p>Enjoy state-of-the-art facilities and equipment. We offer Basketball,
                    Tennis and Badminton Courts. We also have private gyms, fitness gyms,
                    and a play gym for your kids. Check out all of these and more only at Victoria Sports Club.
                  </p>

                  <div className="faci-inquire-btn">
                    <a href="/inquiry"><button>INQUIRE NOW</button></a>
                  </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default FacilitiesHero