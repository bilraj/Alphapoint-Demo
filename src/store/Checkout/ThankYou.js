import React from 'react';
import './styles.css';

const ThankYou = (props) => {

    return (
        <div id="confirm-container-thanks">
            <span><i className="fas mb-4 fa-check-circle fa-7x" style={{color:"var(--two)"}}></i></span>
            <div>
                Thank you for your purchase!
            </div>
        </div>
    )
}


export default ThankYou;