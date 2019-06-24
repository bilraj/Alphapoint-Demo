import React, { Component } from 'react';
import { SendConsumer } from './SendContext';
import { WalletConsumer } from '../../../WalletContext';

export default class AmountBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            placeholder: props.placeholder,
            currency: props.currency,
            sufficientBalance: true
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        event.persist();

        return (
            this.setState(() => {
                return {
                    value: event.target.value
                }
            }, () => {
            })
        )
    }

    validateBalance(amount, balance, setSufficientBalance) {
        var convertedBalance = 0;
        // Save amount in USD
        switch (balance[1]) {
            case "BTC":
                convertedBalance = amount * 0.00010;
                break;
            case "ETH":
                convertedBalance = amount * 0.0035;
                break;
            default:
                alert("Neither btc and eth")
                break;
        }

        console.log("We have: " + balance + " and converted is : " + convertedBalance)
        if (balance[0] < convertedBalance) {
            this.setState(() => {
                return {
                    sufficientBalance: false
                }
            }, () => {
                setSufficientBalance(false)
            })
        } 
        else {
            this.setState(() => {
                return {
                    sufficientBalance: true
                }
            }, () => {
                setSufficientBalance(true);
            })
        }
    }


    updateIfInsufficient(amount, balance) {

    }

    render() {
        return (
            <SendConsumer>
                {(value) => {
                    return (
                        <WalletConsumer>
                            {(walletValue) => {
                                const { balance } = walletValue;
                                console.log("BALANCE HERE IS: " + balance)
                                return (
                                    <div className="amount-box" style={{borderColor: this.state.sufficientBalance ? "" : "red"}}>
                                        <input id="subdomain" type="text" 
                                            onInput={this.handleChange}    
                                            onChange={(e) => value.convertValue(Number(e.target.value))}
                                            onBlur={() => this.validateBalance(Number(this.state.value), balance, value.setSufficientBalance)}
                                            value={this.state.value} placeholder={this.state.placeholder} />
                                        <input type="text" id="subdomaintwo" value="USD" disabled />
                                    </div>
                                )

                            }}
                        </WalletConsumer>

                    )
                }}

            </SendConsumer>
        );
    }
}

function validate(evt) {
    var theEvent = evt || window.event;


    // Handle key press
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);

    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
        return false;
    }
    return true;
}