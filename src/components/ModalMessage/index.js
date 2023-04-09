import React from 'react';
import '../../styles/Message.css';

function index() {
  return (
    <>
        <div className="modal-wrap">
            <div className="modal-box">
                <h1>Thank You!</h1>
                <p>Your details has been successfully submitted. Thanks!</p>

                <div className="exit-btn">
                    <button>OK</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default index