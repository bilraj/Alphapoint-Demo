import React from 'react';

const Confirmation = (props) => {
    if (props.currentStep !== 7) return null
    return (
        <div id="confirm-container">
            <span><i className="fas mb-4 fa-check-circle fa-7x" style={{color:"green"}}></i></span>

            <div>
                Thank you. We will review your documents.

            </div>
            <div className="mt-3">
                Monitor your email for status updates and progress reports from the compliance team.
            </div>
        </div>
    )
}


export default Confirmation;