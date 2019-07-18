import React, { Component } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../../Context';
import { WalletConsumer } from '../../WalletContext';
import PaymentOptions from './PaymentOptions';
import localize from '../../localize';

export default class Checkout extends Component {

    constructor(props) {
        super(props);

        this.state = {
            payWithToken: false
        }
    }

    handlePayWithToken = (event) => {
        this.setState(() => {
            return {
                payWithToken: true
            }
        })
    }

    setPayWithToken = (hasToken) => {
        this.setState(() => {
            return {
                payWithToken: hasToken
            }
        })
    }

    handlePayment = (walletValue, value) => {
        const { balances } = walletValue;
        const { cartTotal } = value;

        if (this.state.payWithToken && balances.length > 4) {

            alert("Paying with token")
            // Check if have enough
            const { balances } = walletValue;
            const symbol = balances[4].sym;

            const token = balances[4];
            const store = "Store";
            const desc = "Purchased items";
            const type = "Purchase";

            if (token.balance > cartTotal) {
                // Do transaction
                let obj = {
                    symbol: symbol,
                    amount: cartTotal,
                    convertedValue: cartTotal,
                    toAddress: store,
                    description: desc,
                    type: type
                }

                walletValue.addTransaction(obj);
                walletValue.updateBalance(cartTotal, false, symbol);
                value.clearCart();

            }
        } else {
            alert("Not Paying with token")

            // Pay with dollars
            value.clearCart();

        }
    }

    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    return (
                        <WalletConsumer>
                            {(walletValue) => {
                                let { cartSubTotal, cartTax, cartTotal, clearCart } = value;
                                let hasToken = false;
                                const { tokens } = walletValue;

                                cartSubTotal = localize(cartSubTotal);
                                cartTax = localize(cartTax);
                                cartTotal = localize(cartTotal);

                                let paymentOptions = [
                                    { name: 'Apple Pay', hasToken: false },
                                    { name: 'Samsung Pay', hasToken: false },
                                ]

                                let symbol = '';
                                let name = '';
                                if (tokens.length > 0) {
                                    hasToken = true;
                                    symbol = tokens[0].symbol;
                                    name = tokens[0].name;
                                    paymentOptions.push({ name: name, hasToken: true })
                                }

                                return (
                                    <div id="checkout-container">
                                        <h1 id="checkout-h1">Checkout</h1>
                                        <hr style={{ width: "90%", backgroundColor: "black" }} />
                                        <div id="checkout-body">
                                            <div id="first-second-container">

                                                <div id="first">
                                                    <h2>Billing Address</h2>
                                                    <div className="buy-row">
                                                        <div><i className="fa fa-user"></i><span className="form-words-with-icons">Full Name</span></div>
                                                        <input type="text" id="name" name="fullName" className="checkout-form-input" placeholder="John M. Doe" />
                                                    </div>
                                                    <div className="buy-row">
                                                        <div><i className="fa fa-envelope"></i><span className="form-words-with-icons">Email</span></div>
                                                        <input type="text" id="email" name="email" className="checkout-form-input" placeholder="john@example.com" />
                                                    </div>
                                                    <div className="buy-row">
                                                        <div><i className="fas fa-map-marked-alt"></i><span className="form-words-with-icons">Address</span></div>
                                                        <input type="text" id="address" name="address" className="checkout-form-input" placeholder="542 W. 15th Street" />
                                                    </div>
                                                    <div className="buy-row">
                                                        <div><i className="fas fa-city"></i><span className="form-words-with-icons">City</span></div>
                                                        <input type="text" id="city" name="city" className="checkout-form-input" placeholder="New York" />
                                                    </div>
                                                    <div className="buy-row-last mt-3">
                                                        <div><span className="form-words-without-icons">State</span></div>
                                                        <input type="text" id="state" name="state" className="checkout-form-input" placeholder="NY" />
                                                    </div>
                                                    <div className="buy-row mt-3">
                                                        <div><span className="form-words-without-icons">Zip</span></div>
                                                        <input type="number" id="zip" name="zip" className="checkout-form-input non" placeholder="10001" />
                                                    </div>
                                                </div>

                                                <div id="second-payment">
                                                    <h2>Payment</h2>

                                                    <form>
                                                        <div className="buy-row">
                                                            <span className="form-words-without-icons">Accepted Cards</span>
                                                        </div>
                                                        <div id="icon-container-temp">
                                                            <i className="fab fa-cc-visa fa-2x cards" style={{ color: "navy" }}></i>
                                                            <i className="fab fa-cc-amex fa-2x cards" style={{ color: "blue" }}></i>
                                                            <i className="fab fa-cc-mastercard fa-2x cards" style={{ color: "red" }}></i>
                                                            <i className="fab fa-cc-discover fa-2x cards" style={{ color: "orange" }}></i>
                                                        </div>
                                                        <div className="buy-row">
                                                            <span className="form-words-without-icons">Pay with</span>
                                                            <PaymentOptions setPayWithToken={this.setPayWithToken} paymentOptions={paymentOptions} />
                                                        </div>
                                                        <div className="buy-row">
                                                            <span className="form-words-without-icons">Name on Card</span>
                                                            <input type="text" id="nameOnCard" name="nameOnCard" className="form-input" placeholder="John M. Doe" />
                                                        </div>
                                                        <div className="buy-row">
                                                            <span className="form-words-without-icons">Credit Card Number</span>
                                                            <input type="text" id="creditCardNumber" name="creditCardNumber" className="form-input" placeholder="1111-2222-3333-4444" />
                                                        </div>
                                                        <div className="buy-row">
                                                            <span className="form-words-without-icons">Exp Month</span>
                                                            <input type="text" id="city" name="expirationMonth" className="form-input" placeholder="January" />
                                                        </div>

                                                        <div className="state-zip">
                                                            <div className="buy-row-last">
                                                                <span className="form-words-without-icons">Exp Year</span>
                                                                <input type="text" id="expirationYear" name="expirationYear" className="form-input" placeholder="2019" />
                                                            </div>

                                                            <div className="buy-row-last">
                                                                <div><span className="form-words-without-icons">CVV</span></div>
                                                                <input type="number" name="cvv" className="form-input non" placeholder="352" />
                                                            </div>
                                                        </div>

                                                    </form>
                                                </div>
                                            </div>


                                        </div>
                                        <div id="total-container">
                                            <h5>
                                                <span className="text-title">
                                                    subtotal: </span>
                                                <strong style={{ position: 'absolute', textAlign: "right", width: "126px" }}>${cartSubTotal}</strong>
                                            </h5>
                                            <h5 style={{ width: "300px", position: 'relative' }}>
                                                <span className="text-title">
                                                    tax: </span> <strong style={{ position: 'absolute', textAlign: "right", width: "70%" }}>${cartTax}</strong>
                                            </h5>
                                            <h5>
                                                <span className="text-title">
                                                    total: </span> <strong style={{ position: 'absolute', textAlign: "right", width: "176px" }}>${cartTotal}</strong>
                                            </h5>

                                            {
                                                hasToken ? (<h5><span className="text-title">total({symbol}):</span><strong style={{ position: 'absolute', textAlign: "right", width: "93px" }}>{cartTotal}</strong></h5>) : <span></span>
                                            }
                                        </div>
                                        <div id="final-button">
                                            <Link to="/checkout/confirmation">
                                                <button className="mt-5 btn btn-outline-success text-uppercase mb-3 px-5"
                                                    type="button"
                                                    onClick={() => { this.handlePayment(walletValue, value) }} >
                                                    Place Order
                                                    </button>
                                            </Link>

                                        </div>

                                    </div>
                                )

                            }}
                        </WalletConsumer>
                    )
                }}
            </ProductConsumer>
        );
    }
}
