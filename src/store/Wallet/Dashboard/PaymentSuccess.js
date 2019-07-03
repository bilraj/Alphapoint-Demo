import React from 'react';
import './styles.css';

const PaymentSuccess = (props) => {
    if(props.currentStep !== 4) return null;

    const { amount, name } = props;

    return (
        <div id="success-container">
            <div id="success-icon">
                <span><i className="fas fa-check-circle fa-7x"></i></span>
            </div>
            <div className="noselect" id="success-words">
                <span>Payment Success!</span>
            </div>
            <div className="noselect" id="success-sub-words">
                <span>You just purchased {amount} {name}s</span>
            </div>

            <div onClick={props.resetStep} className="home-button">
                Home
            </div>
        </div>

    )
}

export default PaymentSuccess;