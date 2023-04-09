import React from 'react';
import '../../styles/Membership.css';
import memberData from '../../data/memberData';

function MembershipPlan() {
  return (
    <>
        <div className="member-wrap" data-aos="fade-up">
            <div className="member-title">
                <h1>MEMBERSHIP</h1>
                <p>
                    Get fit, get healthy, get strong <br/>
                    Join Victoria Sports Club and create a
                    plan that fits your active lifestyle.
                </p>
            </div>

            <div className="member-offers">
                <div className="offers-grid">
                    {memberData.map((items, index) => (
                        <div className="offers-column"  key={index}>
                            <div className="member-img">
                                <img src={items.memberImg} alt="Membership Plan" />
                                <div className="member-titleB">
                                    <p>{items.memberTitle}</p>
                                </div>
                            </div>
                            <div className="member-desc">
                                <p>{items.memberDesc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="inquire-btn">
                <a href="/inquiry"><button>INQUIRE NOW</button></a>
            </div>
        </div>
    </>
  )
}

export default MembershipPlan