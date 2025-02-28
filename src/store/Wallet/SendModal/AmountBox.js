import React, { Component } from 'react';
import { SendConsumer } from './SendContext';
import { WalletConsumer } from '../../../WalletContext';
import { TokenConsumer } from '../../../TokenContext';

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

    validateBalance(amount, setSufficientBalance, selectedItem) {
        const { balance } = selectedItem;

        const convertedBalance = selectedItem.conversionRate * amount;

        // alert("We have: " + balance + " and converted is : " + convertedBalance)
        if (balance < convertedBalance) {
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

    render() {
        return (
            <WalletConsumer>
                {(walletValue) => {
                    return (
                        <div className="amount-box" style={{ borderColor: this.state.sufficientBalance ? "" : "red" }}>
                            <input id="subdomain" type="number"
                                onInput={this.handleChange}
                                onChange={(e) => walletValue.convertValue(Number(e.target.value))}
                                onBlur={() => this.validateBalance(Number(this.state.value), walletValue.setSufficientBalance, walletValue.send.selectedItem)}
                                value={this.state.value} placeholder={this.state.placeholder} />
                            <input type="text" id="subdomaintwo" value="USD" disabled />
                        </div>
                    )
                }}
            </WalletConsumer>

        )
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