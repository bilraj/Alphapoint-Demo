import React from 'react';

const CheckoutTop = (props) => {
    if(props.currentStep !== 2 && props.currentStep !== 3) return null;
    return (
        <>
        
            <div className="table-words">
                <span>Checkout </span>
                <hr style={{ width: "85%" }}></hr>
            </div>
            <div id="purchase-amount">
                {props.amount} {props.symbol}
            </div>
        </>
    )
}

export default CheckoutTop;