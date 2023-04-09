import React, {useRef, useState} from 'react';
import '../../styles/Events.css';
import '../../styles/Inquiry.css';
import '../../styles/Message.css';
import {AiOutlineCheckCircle} from 'react-icons/ai';
import emailjs from '@emailjs/browser';

function EventsForm() {

  //Modal message pop
  const [modal, setModal] = useState(false);

  const showModal = () => {
    setModal(!modal);
  }

  //email form function
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_3zgefqi', form.current, 'user_JbMicfL4zdJ2jy5919PB5')
      .then((result) => {
        e.target.reset();
        alert("success");
      }, (error) => {
        console.log(error.text);
      });
  };

  //form value
  const [uname, setUname] = useState("");
  const [ucname, setuCname] = useState("");
  const [uemail, setUemail] = useState("");
  const [ucontact, setUcontact] = useState("");
  const [udate, setUdate] = useState("");
  const [unumguest, setUnumGuest] = useState("");
  const [ueventtype, setUeventType] = useState("");

  //check if form is filled
  const validate = () => {
    return uname.length & ucname.length & uemail.length & ucontact.length & unumguest.length & ueventtype.length;
  }

  return (
    <>
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
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Expedita voluptate officia veniam nihil. Est, repellendus alias!
                Sapiente, vel? Eaque quos perferendis molestiae corporis laudantium
                voluptate, quae tempora aspernatur ipsam iste, expedita debitis modi
                quia dignissimos.
            </p>
          </div>

          <div className="event-inquiry">
            <div className="inquiry-form">
                <form ref={form} onSubmit={sendEmail} >
                  <div className="form-grid">
                    <div>
                      <label htmlFor="user_name">Name</label>
                      <input type="text" name="user_name" id="user_name" value={uname} onChange={(e) => setUname(e.target.value)} />
                    </div>
                    <div>
                      <label htmlFor="user_company">Company Name</label>
                      <input type="text" name="user_company" id="user_company" value={ucname} onChange={(e) => setuCname(e.target.value)} />
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
                    <button className='submit-btn' type="submit" onClick={showModal} disabled={!validate()} >Submit</button>
                  </div>
                </form>
            </div>
          </div>
      </div>
    </>
  )
}

export default EventsForm