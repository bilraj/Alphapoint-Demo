import React from 'react';

const PleaseUnderstand = (props) => {
    if (props.currentStep !== 4) return null;
    return (
        <div className="noselect" id="please-understand-container">

            <div id="verification-top">
                <b>Verification</b> > <span id="top-word">Preliminary Questions</span>
                <hr style={{ width: "100%", opacity: ".3" }} />
            </div>

            <div>
                <h5><b>Please Understand:</b></h5>
                <div id="reasons">
                    <div><input type="radio" className="mr-2 mb-4 mt-4" /> <span>I understand that due to high verification demand, processing time may take 6-8 weeks after all forms are submitted.</span></div>
                    <div><input type="radio" className="mr-2" /> <span>I understand that TGS verification team will only begin to review my verification request after all of my forms and documents have been submitted.</span></div>
                </div>
            </div>
            <div onClick={props.incrementStep} id="continue-button">
                Continue
            </div>
        </div>
    )
}

export default PleaseUnderstand;