import React, {useState} from 'react';
import '../../styles/Offers.css';
import {IoMdClose} from 'react-icons/io';

function OffersList() {

    const [isPackageModal, setIsPackageModal] = useState(false);
    const [isPackageModalB, setIsPackageModalB] = useState(false);
    const [isPackageModalC, setIsPackageModalC] = useState(false);
    const [isPackageModalD, setIsPackageModalD] = useState(false);


    // useEffect(() => {
    //     if (isPackageModal) {
    //         document.body.style.overflow = 'hidden'
    //     }
    // }, [isPackageModal])

    const showPackage = () => {
        setIsPackageModal(!isPackageModal);
    };

    const showPackageB = () => {
        setIsPackageModalB(!isPackageModalB);
    };

    const showPackageC = () => {
        setIsPackageModalC(!isPackageModalC);
    };

    const showPackageD = () => {
        setIsPackageModalD(!isPackageModalD);
    };



  return (
    <>
        {/**modal */}
        <div className={isPackageModal ? 'package-wrap active' : 'package-wrap'}>
            <div className="close-modal">
                <button onClick={showPackage} ><IoMdClose className='closeIcon' /></button>
            </div>
            <div className="package-box" onClick={e => e.stopPropagation()}>
                <div className="package-details">
                    <img src="/vscimages/offers/packages/BalletPckg.webp" alt="Ballet Package" />
                </div>
            </div>
        </div>

        <div className={isPackageModalB ? 'package-wrap active' : 'package-wrap'}>
            <div className="close-modal">
                <button onClick={showPackageB} ><IoMdClose className='closeIcon' /></button>
            </div>
            <div className="package-box">
                <div className="package-details">
                    <img src="/vscimages/offers/packages/TaekwondoPckg.webp" alt="Taekwondo Package" />
                </div>
            </div>
        </div>

        <div className={isPackageModalC ? 'package-wrap active' : 'package-wrap'}>
            <div className="close-modal">
                <button onClick={showPackageC} ><IoMdClose className='closeIcon' /></button>
            </div>
            <div className="package-box">
                <div className="package-details">
                    <img src="/vscimages/offers/packages/Jiu-JitsuPckg.webp" alt="Jiu-Jitsu Package" />
                </div>
            </div>
        </div>

        <div className={isPackageModalD ? 'package-wrap active' : 'package-wrap'}>
            <div className="close-modal">
                <button onClick={showPackageD} ><IoMdClose className='closeIcon' /></button>
            </div>
            <div className="package-box">
                <div className="package-details">
                    <img src="/vscimages/offers/packages/SwimmingPckg.webp" alt="Swimming Package" />
                </div>
            </div>
        </div>

        {/**main */}

        <div className="offers-wrap" >
            <div className="offers-title" data-aos="fade-up">
                <h1>SPECIAL OFFERS</h1>
                <p>Be updated with the latest promo offerings of the Victoria Sports Club.</p>
            </div>

            <div className="offers-list">
                <div className="offers-grid">
                    <div className="offers-col" data-aos="fade-up">
                        <div className="offers-img">
                            <img src="/vscimages/offers/ballet.webp" alt="Ballet" />
                        </div>
                    </div>

                    <div className="offers-col" data-aos="fade-up">
                        <div className="offers-description">
                            <h1>BALLET</h1>
                            <p>
                                Learn from the best and join our Ballet classes. Be trained by the next generation's
                                dancers from the School of Alice Reyes Dance Philippines and embody the pinnacle of
                                Filipino dance. We offer classes for children ages 4 to 12, adults, and pre-professional programs.
                            </p>
                            <button className='package-btn' onClick={showPackage} >View Package</button>
                        </div>
                    </div>
                </div>

                <div className="offers-grid">
                    <div className="offers-col" data-aos="fade-up">
                        <div className="offers-description">
                            <h1>TAEKWONDO</h1>
                            <p>Learn the art of taekowondo with Coach Andres Fajardo of ACES TKD. Classes are
                                available for Basic (Beginners), Intermediate (students w/ basic Taekwondo skills),
                                and Advanced (students with higher Taekwondo skills) are available.
                            </p>
                            <button className='package-btn' onClick={showPackageB} >View Package</button>
                        </div>
                    </div>
                    <div className="offers-col elementB" data-aos="fade-up">
                        <div className="offers-img">
                            <img src="/vscimages/offers/taekwondo.webp" alt="Taekwondo" />
                        </div>
                    </div>
                </div>

                <div className="offers-grid">
                    <div className="offers-col" data-aos="fade-up">
                        <div className="offers-img">
                            <img src="/vscimages/offers/jiu-jitsu.webp" alt="Jiu-Jitsu" />
                        </div>
                    </div>

                    <div className="offers-col" data-aos="fade-up">
                        <div className="offers-description">
                            <h1>JIU-JITSU</h1>
                            <p>Develop self-defense skills, increase strength,
                                and improve your cardio. Join DEFTAC Victoria Sports
                                and train with the best of the best in Asia.
                            </p>
                            <button className='package-btn' onClick={showPackageC} >View Package</button>
                        </div>
                    </div>
                </div>

                <div className="offers-grid">
                    <div className="offers-col" data-aos="fade-up">
                        <div className="offers-description">
                            <h1>SWIMMING</h1>
                            <p>Take a plunge in Victoria Sports Club's Water Spa and Lap Pool.
                                Learn different swimming skills and techniques from our registered
                                coaches from the Philippine Swimming Inc. National Swimming Federation.
                                Swimming classes vary per age group.
                            </p>
                            <button className='package-btn' onClick={showPackageD} >View Package</button>
                        </div>
                    </div>
                    <div className="offers-col elementB" data-aos="fade-up">
                        <div className="offers-img">
                            <img src="/vscimages/offers/swimming.webp" alt="Swimming" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="offers-tag">
                <h1>WANT TO KNOW MORE ABOUT OUR SPECIAL OFFERS ?</h1>
            </div>
            <div className="offers-btn">
                <a href="/inquiry"><button>INQUIRE NOW</button></a>
            </div>

        </div>
    </>
  )
}

export default OffersList