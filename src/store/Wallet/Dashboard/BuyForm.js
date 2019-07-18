import React, { Component } from 'react';

export default class BuyForm extends Component {
    render() {
        if (this.props.currentStep !== 1) return null;
        const { amount } = this.props.value;
        const { symbol, name } = this.props;
        return (
            <>
                <div className="table-words">
                    <span>Purchase {name}</span>
                    <hr style={{ width: "90%", backgroundColor:"rgba(0,0,0,0.3)" }}></hr>
                </div>
                <form onSubmit={this.props.updateCurrentStep}>
                    <div className="buy-row">
                        <span className="buy-words">Amount ({symbol}) </span> <br></br>
                        <span><input value={amount} onChange={this.props.handleChange}
                            className="buy-input non" type="number"></input></span>
                    </div>
                </form>
                <div className="buy-row">
                    <span className="buy-words">Price (USD)</span>
                </div>

                <hr style={{ width: "90%", backgroundColor:"rgba(0,0,0,0.3)" }}></hr>
                <div className="buy-row-close">
                    <span className="buy-words">Asking Price (USD)</span>
                    <span className="buy-words" id="price-asking">500.00</span>
                </div>
                <div className="buy-row-close">
                    <span className="buy-words">Fees</span>
                    <span className="buy-words" id="price-asking">None</span>
                </div>
                <div className="buy-row-close">
                    <span className="buy-words">Order Total (USD)</span>
                    <span className="buy-words" id="price-asking">${(500 * amount).toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</span>
                </div>
                <div onClick={this.props.updateCurrentStep} id="buy-button">
                    <span>Checkout</span>
                </div>

                <hr style={{ width: "90%", marginTop:"1.9rem", backgroundColor:"rgba(0,0,0,0.3)" }}></hr>
                <div className="buy-row-close">
                    <span className="buy-words">USD Balance: </span>
                    <span className="buy-words" id="price-asking">${(500 * amount).toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</span>
                </div>
            </>
        );

    }
}
