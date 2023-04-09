import React from 'react';
import '../../styles/about.css';
import '../../styles/Map.css';

function AboutMap() {
  return (
    <>
        <div className="map-wrap">
            <div className="wrap-image">
                <iframe title='myFrame' src="https://maps.google.com/maps?q=victoria%20sport%20tow&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="700" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="map-name">
                <p>Victoria Sports Tower 2, 799 EDSA South Triangle Quezon City</p>
            </div>
        </div>
    </>
  )
}

export default AboutMap