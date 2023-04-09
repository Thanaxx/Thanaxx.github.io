import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import '../../styles/Inquiry.css';
import '../../styles/Message.css';
import {AiOutlineCheckCircle} from 'react-icons/ai';

function Index() {

    //Modal message
    const [modal, setModal] = useState(false);

    const showModal = () => {
        setModal(!modal);
    }

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_b2ibueo', 'template_s15xwnf', form.current, '75jsZlR0TkKSSLLKn')
        .then((result) => {
            // console.log(result.text);
            e.target.reset();
            //reseting the value after submit
            setUname("");
            setUemail("");
            setUcontact("");
            // alert("success");
        }, (error) => {
            // console.log(error.text);
        });
    };

    //form value
    const [uname, setUname] = useState("");
    const [uemail, setUemail] = useState("");
    const [ucontact, setUcontact] = useState("");


    //check if input form is filled
    const validate = () => {
        return uname.length && uemail.length && ucontact.length;
    };

    //disable the button if the form is invali and enable if valid or filled
    //reset form

  return (
    <>
    {/**MODAL POP-UP WHEN FORM IS SUBMITTED */}
        <div className={modal ? 'modal-wrap active' : 'modal-wrap'}>
            <div className="modal-box">
                <AiOutlineCheckCircle className='checkIcon' />
                <h1>Thank You!</h1>
                <p>Your details has been successfully <br/> submitted. Thanks!</p>

                <div className="exit-btn">
                    <button onClick={showModal} >OK</button>
                </div>
            </div>
        </div>

        <div className="hero-wrap" data-aos="fade">
            <div className="hero-img">
                <img src="/vscimages/inquiry/inquiryb.webp" alt="Tennis Court" />
            </div>
        </div>
        <div className="inquiry-wrap" data-aos="fade-up">
            <div className="inquiry-form">
                <div className="form-grid">
                    <div className="form-col">
                        <div className="form-title">
                            <h1>
                                GET FIT <br />
                                GET HEALTHY <br />
                                GET STRONG
                            </h1>

                            <h1 className="hide">
                                GET FIT
                                GET HEALTHY
                                GET STRONG
                            </h1>
                        </div>
                    </div>

                    <div className="form-col">
                        <form ref={form} onSubmit={sendEmail}>
                            <label htmlFor="user_name">Name</label>
                            <input type="text" name="user_name" value={uname} onChange={(e) => setUname(e.target.value)} />

                            <div className='form-grid'>
                                <div>
                                    <label htmlFor="user_email">Email Address</label>
                                    <input type="email" name="user_email" value={uemail} onChange={(e) => setUemail(e.target.value)} />
                                </div>
                                <div>
                                    <label htmlFor="user_contact">Contact Number</label>
                                    <input type="number" name="user_contact" id="contact" value={ucontact} onChange={(e) => setUcontact(e.target.value)}/>
                                </div>
                            </div>

                            <label htmlFor="user_plan">Select Plan</label>
                            <select name="user_plan" id="plan" required>
                                <option value=""></option>
                                <option value="Annual Premiere">Annual Premiere</option>
                                <option value="Semi-Annual Premiere">Semi-Annual Premiere</option>
                                <option value="Gym Access">Gym Access</option>
                                <option value="Gym Access + 1">Gym Access + 1</option>
                            </select>

                            <br/>

                            <div className="submit-wrap">
                                <button className='submit-btn' type="submit" onClick={showModal} disabled={!validate()}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Index