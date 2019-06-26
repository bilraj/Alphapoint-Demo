import React, { Component } from 'react';
import './styles.css'


export default class BuyTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            amount: ''
        }
    }

    handleChange = (event) => {
        event.persist();
        this.setState(() => {
            return {
                amount: event.target.value
            }
        })
    }

    handleSubmit = () => {
        if (isNaN(this.state.amount)) return null;
        const {name} = this.props;

        // Add currency
        var obj = {
            name: name,
            balance: Number(this.state.amount)
        }

        this.props.addNewCurrency(obj)
    }

    render() {
        const { symbol } = this.props.value.tokens;
        
        // If no new coin, add to wallet
        return (
            <div className="buy-container">
                <div className="table-words">
                    <span>Purchase {symbol}</span>
                    <hr style={{ width: "85%" }}></hr>
                </div>

                <div className="buy-row">
                    <span className="buy-words">Amount ({symbol}) </span> <br></br>
                    <span><input value={this.state.amount} onChange={this.handleChange}
                        className="buy-input" type="text"></input></span>
                </div>
                <div className="buy-row">
                    <span className="buy-words">Price (USD)</span>
                </div>

                <hr style={{ width: "85%" }}></hr>
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
                    <span className="buy-words" id="price-asking">{(500 * this.state.amount).toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</span>
                </div>
                <div onClick={() => this.handleSubmit} id="buy-button">
                    <span>Checkout</span>
                </div>

                <hr style={{ width: "85%" }}></hr>
                <div className="buy-row-close">
                    <span className="buy-words">USD Balance: </span>
                    <span className="buy-words" id="price-asking">{(500 * this.state.amount).toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</span>
                </div>
            </div>
        )
    }
}




