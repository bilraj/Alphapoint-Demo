import React from 'react';

const CheckoutFormA = (props) => {
    if (props.currentStep !== 2) return null;

    return (
        <div id="checkout-container">
            <form action={props.handleSubmitBillingAddress}>
                <div className="buy-row">
                    <div><i className="fa fa-user"></i><span className="form-words-with-icons">Full Name</span></div>
                    <input onBlur={props.handleFieldChange} type="text" id="name" name="fullName" className="form-input" placeholder="John M. Doe" />
                </div>
                <div className="buy-row">
                    <div><i className="fa fa-envelope"></i><span className="form-words-with-icons">Email</span></div>
                    <input onBlur={props.handleFieldChange} type="text" id="email" name="email" className="form-input" placeholder="john@example.com" />
                </div>
                <div className="buy-row">
                    <div><i className="fas fa-map-marked-alt"></i><span className="form-words-with-icons">Address</span></div>
                    <input onBlur={props.handleFieldChange} type="text" id="address" name="address" className="form-input" placeholder="542 W. 15th Street" />
                </div>
                <div className="buy-row">
                    <div><i className="fas fa-city"></i><span className="form-words-with-icons">City</span></div>
                    <input onBlur={props.handleFieldChange} type="text" id="city" name="city" className="form-input" placeholder="New York" />
                </div>
                <div className="state-zip">
                    <div className="buy-row-last">
                        <div><span className="form-words-without-icons">State</span></div>
                        <input onBlur={props.handleFieldChange} type="text" id="state" name="state" className="form-input" placeholder="NY" />
                    </div>
                    <div className="buy-row-last">
                        <div><span className="form-words-without-icons">Zip</span></div>
                        <input onBlur={props.handleFieldChange} type="number" id="zip" name="zip" className="form-input non" placeholder="10001" />
                    </div>
                </div>
            </form>
        </div>
    )
}

const CheckoutFormB = (props) => {
    if (props.currentStep !== 3) return null;

    return (
        <div id="checkout-container">
            <div className="buy-row">
                <span className="form-words-without-icons">Accepted Cards</span>
            </div>
            <div id="icon-container">
                <i className="fab fa-cc-visa fa-2x cards" style={{ color: "navy" }}></i>
                <i className="fab fa-cc-amex fa-2x cards" style={{ color: "blue" }}></i>
                <i className="fab fa-cc-mastercard fa-2x cards" style={{ color: "red" }}></i>
                <i className="fab fa-cc-discover fa-2x cards" style={{ color: "orange" }}></i>
            </div>

            <div className="buy-row">
                <span className="form-words-without-icons">Name on Card</span>
                <input onBlur={props.handleFieldChange} type="text" id="nameOnCard" name="nameOnCard" className="form-input" placeholder="John M. Doe" />
            </div>
            <div className="buy-row">
                <span className="form-words-without-icons">Credit Card Number</span>
                <input onBlur={props.handleFieldChange} type="text" id="creditCardNumber" name="creditCardNumber" className="form-input" placeholder="1111-2222-3333-4444" />
            </div>
            <div className="buy-row">
                <span className="form-words-without-icons">Exp Month</span>
                <input onBlur={props.handleFieldChange} type="text" id="city" name="expirationMonth" className="form-input" placeholder="January" />
            </div>

            <div className="state-zip">
                <div className="buy-row-last">
                    <span className="form-words-without-icons">Exp Year</span>
                    <input onBlur={props.handleFieldChange} type="text" id="expirationYear" name="expirationYear" className="form-input" placeholder="2019" />
                </div>

                <div className="buy-row-last">
                    <div><span className="form-words-without-icons">CVV</span></div>
                    <input onBlur={props.handleFieldChange} type="number"  name="cvv" className="form-input non" placeholder="352" />
                </div>
            </div>
        </div>
    )
}

export { CheckoutFormA, CheckoutFormB };