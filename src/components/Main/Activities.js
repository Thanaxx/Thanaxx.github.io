import React from 'react';
import '../../styles/activities.css';
import activitiesData from '../../data/activitiesData';

function Activities() {
  return (
    <>
      <div className="act-wrap">
        <div className="act-box">
          <p>EXPERIENCE VS CLUB</p>
        </div>
        <div className="act-slider">
          <div className="slide-track">
              {activitiesData.map((items, index) => (
                <div className="slide" key={index}>
                  <img src={items.actImg} alt="Activities" />
                  <p>{items.actDesc}</p>
                </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Activities