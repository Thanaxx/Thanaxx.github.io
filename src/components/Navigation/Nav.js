import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {HiOutlineMenuAlt4} from 'react-icons/hi';
import {MdOutlineClose} from 'react-icons/md';
import '../../styles/Nav.css';

function Nav() {

    //sidebar pop
    const [sideBar, setSideBar] = useState(false);

    const showSideBar = () => {
        setSideBar(!sideBar);
    }

    //navbar show color
    const [navBar, setNavBar] = useState(false);

    const changeBg = () => {
        if (window.scrollY >= 200){
            setNavBar(true);
        }
        else{
            setNavBar(false);
        }
    };

    window.addEventListener('scroll', changeBg);

  return (
    <>
        <div className={navBar ? 'nav-wrap active': 'nav-wrap'}>
            <div className='nav-flex'>
                <div className='nav-logo'>
                    <div>
                        <a href="/">
                            <img src="/vscimages/logo/VICTORIA SPORTS logo(2).webp" className='logo' alt='Victoria Sports Club Logo' />
                        </a>
                    </div>
                </div>

                <div className='nav-bar-btn'>
                    <button onClick={showSideBar}><HiOutlineMenuAlt4/></button>
                </div>
            </div>
        </div>

        {/**backdrop effect */}
        <div className={sideBar ? 'backdrop active' : 'backdrop'} onClick={showSideBar}></div>

        <div className={sideBar ? 'nav-menu active' : 'nav-menu'}>
            <ul className="nav-items">
                <li className="nav-toggle">
                    <h1>Victoria Sports Club</h1>
                    <button onClick={showSideBar}><MdOutlineClose/></button>
                </li>

                {/** LINKS */}
                <li className="nav-links active-border">
                    <Link className="text-link active-text" to="/" onClick={showSideBar}>Home</Link>
                </li>

                <li className="nav-links">
                    <Link className="text-link" to="/facilities" onClick={showSideBar}>Facilities</Link>
                </li>

                <li className="nav-links">
                    <Link className="text-link" to="/offers" onClick={showSideBar}>Special Offers</Link>
                </li>

                <li className="nav-links">
                    <Link className="text-link" to="/membership" onClick={showSideBar}>Membership</Link>
                </li>

                <li className="nav-links">
                    <Link className="text-link" to="/events" onClick={showSideBar}>Events</Link>
                </li>

                <li className="nav-links">
                    <Link className="text-link" to="/contact" onClick={showSideBar}>Contact Us</Link>
                </li>

                <li className="nav-links">
                    <Link className="text-link" to="/inquiry" onClick={showSideBar}>Inquiry</Link>
                </li>

                <li className="nav-links">
                    <Link className="text-link" to="https://www.vshotel.com.ph" onClick={showSideBar} target="_blank">VS Hotel</Link>
                </li>
            </ul>

            {/**
                <div className="copyright">
                    <p>Copyright © 2023 Victoria Sports Club </p>
                </div>
            */}
        </div>
    </>
  )
}

export default Nav