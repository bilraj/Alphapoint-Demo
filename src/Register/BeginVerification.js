import React from 'react';

const BeginVerification = (props) => {
    if (props.currentStep !== 2) return null;

    return (
        <div className="begin-verification-container">
            <h1>Verfication</h1>
            <hr style={{ width: "100%" }} />
            <div id="begin-verification-body">
                <p>
                    If you wish to deposit or withdraw USD, Euro, or other fiat currencies, your account must be verified to comply with relevant anti-money laundering (AML) and counter-terrorism financing (CTF) laws and regulations.
                </p>
                <p>
                    TGS has adopted an online verification procedure which will require you to complete an online questionnaire and attach certain documents as supporting evidence. 
                    You will also need to download, sign and upload a declaration form confirming the accuracy of the information provided and authorizing TGS to verify the information.
                </p>

                <div onClick={props.incrementStep} id="begin-verification-button">
                    Begin Verification
                </div>
            </div>

        </div>
    )
}

export default BeginVerification;