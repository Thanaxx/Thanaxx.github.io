import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Footer.css'

function index() {
  return (
    <>
        <div className="footer">
            <div className="footer-wrap">
                <div className="footer-grid">
                    <div className="main-col left">
                        <div className="ftr-logo-m">
                            <img src="/vscimages/logo/VICTORIA SPORTS logo(1).png" alt="VS Club Logo Green" />
                        </div>

                        <div className="news-col-sec">
                            <p>SUBSCRIBE TO OUR NEWSLETTER</p>
                            <form action="https://lascasasfilipinas.us1.list-manage.com/subscribe/post?u=2dc85a100274ce1d29cb7076c&amp;id=81f43e7f29" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate="" className="news-input">
                                <input type="email" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required />
                                <div aria-hidden="true" className='hid'><input type="text" name="b_2dc85a100274ce1d29cb7076c_81f43e7f29" tabindex="-1" value=""/></div>
                                <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button" className='subscribe'/></div>
                            </form>
                        </div>
                    </div>

                    <div className="main-col right">
                        <div className="col-grid">
                            <div className="col-grid-right">
                                <h1>FOR INQUIRIES & BOOKINGS</h1>
                                <p>+63 927 559 7631 or +63 927 559 7630</p>
                                <p>sportsleisure@victoriasportsclub.com.ph</p>
                                <p>6F, Victoria Sports Tower 2, <br/>
                                    799 EDSA South  Triangle Quezon City
                                </p>
                            </div>

                            <div className="col-grid-right">
                                <h1>RELATED LINKS</h1>
                                <Link to="/facilities" className='ftrLink' ><p>Facilities</p></Link>
                                <Link to="/offers" className='ftrLink' ><p>Special Offers</p></Link>
                                <Link to="/membership" className='ftrLink' ><p>Membership</p></Link>
                                <Link to="/events" className='ftrLink' ><p>Events</p></Link>
                                <Link to="/contact" className='ftrLink' ><p>Contact Us</p></Link>
                                <Link to="/inquiry" className='ftrLink' ><p>Inquiry</p></Link>
                            </div>

                            <div className="col-grid-right">
                                <h1> <i>more from</i> VS CLUB </h1>
                                <Link to="https://www.vshotel.com.ph/" target="_blank" className='ftrLink' ><p>VS Hotel</p></Link>
                                <Link to="https://www.lascasasfilipinas.com/" target="_blank" className='ftrLink' ><p>Las Casas Bataan</p></Link>
                                <Link to="https://lascasasqc.com/" target="_blank" className='ftrLink' ><p>Las Casas Quezon City</p></Link>
                                <Link to="https://lascasasweddings.com/" target="_blank" className='ftrLink' ><p>Las Casas Weddings</p></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="breaker">

                </div>

                <div className="footer-bottom-grid">
                    <div className="socs-col-img">
                        <Link to="https://www.facebook.com/thevictoriasportsclub" target="_blank"><img src="/vscimages/socialmed/Vector.png" alt="facebook icon" /></Link>
                        <Link to="https://www.instagram.com/thevictoriasportsclub/" target="_blank"><img src="/vscimages/socialmed/Vectorig.png" alt="instagram icon" /></Link>
                    </div>

                    <p>Copyright © 2023 Victoria Sports Club</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default index