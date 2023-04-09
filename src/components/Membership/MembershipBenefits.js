import React from 'react';
import {GiCheckMark} from 'react-icons/gi';
import '../../styles/Membership.css';
import Video from 'react-responsive-video';
import memberVid from '../../video/Membership556x500.mp4';

function MembershipBenefits() {
  return (
    <>
        <div className="benefits-wrap" data-aos="fade-up">
            <div className="benefits-grid">
                <div className="benefits-col">
                    <h1>BEST GYM MEMBERSHIP</h1>

                    <div className="benefits-lists">
                        <ul>
                            <li>
                                <div className="check-icon">
                                    <GiCheckMark/>
                                </div>
                                <div className="benefits-desc">
                                    <p>Modern facilities and equipment</p>
                                </div>
                            </li>

                            <li>
                                <div className="check-icon">
                                    <GiCheckMark/>
                                </div>
                                <div className="benefits-desc">
                                    <p>Complete Sports and Leisure experience</p>
                                </div>
                            </li>

                            <li>
                                <div className="check-icon">
                                    <GiCheckMark/>
                                </div>
                                <div className="benefits-desc">
                                    <p>Experienced and certified trainers</p>
                                </div>
                            </li>

                            <li>
                                <div className="check-icon">
                                    <GiCheckMark/>
                                </div>
                                <div className="benefits-desc">
                                    <p>Accessible, clean, convenient, and exclusive</p>
                                </div>
                            </li>

                            <li>
                                <div className="check-icon">
                                    <GiCheckMark/>
                                </div>
                                <div className="benefits-desc">
                                    <p>One-stop health and wellness club</p>
                                </div>
                            </li>

                            <li>
                                <div className="check-icon">
                                    <GiCheckMark/>
                                </div>
                                <div className="benefits-desc">
                                    <p>Over a hundred (100) gym equipment available</p>
                                </div>
                            </li>

                            <li>
                                <div className="check-icon">
                                    <GiCheckMark/>
                                </div>
                                <div className="benefits-desc">
                                    <p>Competitive price offering</p>
                                </div>
                            </li>
                        </ul>

                        <div className="learn-btn">
                            <a href="/about">
                                <button>
                                    LEARN MORE ABOUT US
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="benefits-col vid">
                    <div className="benefits-vid">
                        <Video mp4={memberVid} />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default MembershipBenefits