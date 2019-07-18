import React from 'react';
import { Link } from 'react-router-dom';
import { WalletConsumer } from '../../WalletContext';
import localize from '../../localize';

export default function CartTotals({ value }) {

    let { cartSubTotal, cartTax, cartTotal, clearCart } = value;

    cartSubTotal = localize(cartSubTotal);
    cartTax = localize(cartTax);
    cartTotal = localize(cartTotal);

    return (
        <React.Fragment>
            <WalletConsumer>
                {(value) => {
                    const { tokens } = value;
                    let hasToken = false;
                    let symbol = '';
                    if (tokens.length > 0) {
                        hasToken = true;
                        symbol = tokens[0].symbol;
                    }

                    return (
                        <div className="container">
                            <div className="row">
                                <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                                    <Link to='/'>
                                        <button className="btn btn-outline-danger text-uppercase mb-3 px-5"
                                            type="button"
                                            onClick={() => clearCart()}>
                                            Clear Cart
                                        </button>
                                    </Link>
                                    <h5>
                                        <span className="text-title">
                                            subtotal: </span>
                                        <strong>${cartSubTotal}</strong>
                                    </h5>
                                    <h5>
                                        <span className="text-title">
                                            tax: </span> <strong>${cartTax}</strong>
                                    </h5>
                                    <h5>
                                        <span className="text-title">
                                            total: </span> <strong>${cartTotal}</strong>
                                    </h5>

                                    {
                                        hasToken ? (<h5><span className="text-title">total({symbol}):</span><strong>{cartTotal}</strong></h5>) : <span></span>
                                    }

                                    {/* <PaypalButton total={cartTotal} clearCart={clearCart}
                            history={history
                        /> */}
                                    <Link to="/checkout">
                                        <button className="mt-5 btn btn-outline-success text-uppercase mb-3 px-5"
                                            type="button" >
                                            Checkout
                                        </button>
                                    </Link>


                                </div>

                            </div>

                        </div>

                    )
                }}
            </WalletConsumer>

        </React.Fragment>
    )
}