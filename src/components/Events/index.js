import React, {useRef, useState} from 'react';
import '../../styles/Facilities.css';
import '../../styles/Events.css';
import '../../styles/Inquiry.css';
import '../../styles/Message.css';
import {AiOutlineCheckCircle} from 'react-icons/ai';
import emailjs from '@emailjs/browser';

function Index() {

    //Modal message pop
    const [modal, setModal] = useState(false);

    const showModal = () => {
        setModal(!modal);
    }

    //email form function
    const form = useRef();

    const sendMail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_pnnw3xk', 'template_utyr6nq', form.current, '75jsZlR0TkKSSLLKn')
            .then((result) => {
                e.target.reset();
                //reset the value after submit
                setUname("");
                setUcname("");
                setUemail("");
                setUcontact("");
                setUeventType("");
                // alert("success");
            }, (error) => {
                // console.log(error.text);
            });
    };

    //form value
    const [uname, setUname] = useState("");
    const [ucname, setUcname] = useState("");
    const [uemail, setUemail] = useState("");
    const [ucontact, setUcontact] = useState("");
    const [udate, setUdate] = useState("");
    const [unumguest, setUnumGuest] = useState("");
    const [ueventtype, setUeventType] = useState("");

    //check if form is filled
    const validate = () => {
        return uname.length && ucname.length && uemail.length && ucontact.length && ueventtype.length;
    }

  return (
    <>
        <div className="hero-wrap" data-aos="fade">
            <div className="hero-img">
                <img src="/vscimages/events/events.webp" alt="events" />
            </div>
        </div>

        {/**MODAL POP-UP */}
      <div className={modal ? 'modal-wrap active': 'modal-wrap' }>
        <div className="modal-box">
          <AiOutlineCheckCircle className='checkIcon' />
          <h1>Thank You!</h1>
          <p>Your details has been successfully <br/> submitted. Thanks!</p>

          <div className="exit-btn">
              <button onClick={showModal}>OK</button>
          </div>
        </div>
      </div>

      <div className="event-wrap" data-aos="fade-up" >
          <div className="event-title">
            <h1>EVENTS</h1>
            <p>
              Celebrate simple but elegant occasions with our classic and chic
              function rooms. We can do Socials, Corporate functions, or Intimate
              gatherings. We can accommodate up to 200 guests.
            </p>
          </div>

          <div className="event-inquiry">
            <div className="inquiry-form">
                <form ref={form} onSubmit={sendMail} >
                  <div className="form-grid">
                    <div>
                      <label htmlFor="user_name">Name</label>
                      <input type="text" name="user_name" id="user_name" value={uname} onChange={(e) => setUname(e.target.value)} />
                    </div>
                    <div>
                      <label htmlFor="user_company">Company Name</label>
                      <input type="text" name="user_company" id="user_company" value={ucname} onChange={(e) => setUcname(e.target.value)} />
                    </div>
                  </div>

                  <div className="form-grid">
                    <div>
                      <label htmlFor="user_email">Email Address</label>
                      <input type="email" name="user_email" id="user_email" value={uemail} onChange={(e) => setUemail(e.target.value)} />
                    </div>
                    <div>
                      <label htmlFor="user_contact">Contact Number</label>
                      <input type="number" name="user_contact" id="user_contact" value={ucontact} onChange={(e) => setUcontact(e.target.value)} />
                    </div>
                  </div>

                  <div className="form-gridB">

                    <div>
                      <label htmlFor="event_date">Date of Event</label>
                      <input type="date" name="event_date" value={udate} onChange={(e) => setUdate(e.target.value)} />
                    </div>
                    <div>
                      <label htmlFor="num_guest">Number of Guest</label>
                      <input type="number" name="num_guest" value={unumguest} onChange={(e) => setUnumGuest(e.target.value)} />
                    </div>
                    <div>
                      <label htmlFor="event_type">Type of Event</label>
                      <input type="text" name="event_type" value={ueventtype} onChange={(e) => setUeventType(e.target.value)} />
                    </div>
                  </div>

                  <div className="submit-btn-wrap">
                    <button className='submit-btn-event' type="submit" onClick={showModal} disabled={!validate()}>Submit</button>
                  </div>
                </form>
            </div>
          </div>
      </div>
    </>
  )
}

export default Index