import React, { Component } from 'react';
import './styles.css'
import BuyForm from './BuyForm';
import { CheckoutFormA, CheckoutFormB } from './CheckoutForm';
import CheckoutTop from './CheckoutTop';
import { ButtonContainer } from '../../Button';


export default class BuyTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            amount: '318.2',
            paymentSuccess: false,
            currentStep: 3,
            fullName: "",
            email: "",
            address: "",
            city: "",
            state: "",
            zip: "",
            nameOnCard: "",
            creditCardNumber: "",
            expirationMonth: "",
            expirationYear: "",
            cvv: 0
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

        const { name } = this.props.value.tokens[0];

        // Add currency
        var obj = {
            name: name,
            balance: Number(this.state.amount)
        }

        if (this.props.addNewCurrency(obj)) {
            this.setState(() => {
                return {
                    paymentSuccess: true,
                }
            })
        }
    }

    handleFieldChange = (event) => {
        const field = event.target.name;
        const value = event.target.value;

        this.setState(() => {
            return {
                [field]: value
            }
        }, () => {
        })
    }

    updateCurrentStep = () => {
        console.log("STEP: " + this.state.currentStep);
        if (this.state.currentStep === 1) {
            if (this.state.amount === '') {
                return null;
            }
            else {
                this.setState((prevState) => {
                    return {
                        currentStep: (prevState.currentStep + 1)
                    }
                })
            }
        }
    }

    _prev = () => {
        let { currentStep } = this.state;
        currentStep = currentStep <= 1 ? 1 : currentStep - 1;
        this.setState(() => {
            return {
                currentStep: currentStep
            }
        })
    }

    _next = () => {
        let { currentStep } = this.state;
        currentStep = currentStep >= 4 ? 1 : currentStep + 1;
        this.setState(() => {
            return {
                currentStep: currentStep
            }
        })
    }

    get nextButton() {
        let { currentStep } = this.state;

        if (currentStep === 2) {
            return (
                <ButtonContainer onClick={this.handleSubmitBillingAddress}>
                    Next
                </ButtonContainer>
            )
        }
        else if (currentStep === 3) {
            return (
                <ButtonContainer onClick={this.handleSubmitPayment}>
                    Next
                </ButtonContainer>
            )
        }
    }

    get previousButton() {
        let { currentStep } = this.state;
        if (currentStep !== 1) {
            return (
                <ButtonContainer onClick={this._prev}>
                    Back
                </ButtonContainer>
            )
        }
    }

    handleSubmitBillingAddress = () => {
        console.log("Validating");
        if (this.allBillingFieldsValid()) {
            this._next();
        }
    }

    handleSubmitPayment = () => {
        if (this.allPaymentFieldsValid()) {
            this._next();
        }
    }

    allPaymentFieldsValid = () => {
        const { nameOnCard, creditCardNumber, expirationMonth, expirationYear, cvv } = this.state;

        if (nameOnCard === '' ||
            creditCardNumber === '' ||
            expirationMonth === '' ||
            expirationYear === '' ||
            cvv === ''
        ) {
            return false;
        }
        return true;

    }

    allBillingFieldsValid = () => {
        const { fullName, address, email, city, state, zip } = this.state;
        if (fullName === '' ||
            address === '' ||
            email === '' ||
            city === '' ||
            state === '' ||
            zip === '') {
            return false;
        }
        return true;
    }

    render() {
        if (this.props.value.tokens.length === 0) return null;
        const { symbol } = this.props.value.tokens[0];
        // If no new coin, add to wallet
        return (
            <div className="buy-container">
                <CheckoutTop currentStep={this.state.currentStep} symbol={symbol} amount={this.state.amount} />
                <BuyForm symbol={symbol} value={this.state} updateCurrentStep={this.updateCurrentStep} handleChange={this.handleChange} currentStep={this.state.currentStep} />
                <CheckoutFormA handleSubmitBillingAddress={this.handleSubmitBillingAddress} handleFieldChange={this.handleFieldChange} symbol={symbol} amount={this.state.amount} currentStep={this.state.currentStep} />
                <CheckoutFormB handleSubmitPayment={this.handleSubmitPayment} handleFieldChange={this.handleFieldChange} symbol={symbol} amount={this.state.amount} currentStep={this.state.currentStep} />
                <div className="buttons">
                    <span>{this.previousButton}</span>
                    <span>{this.nextButton}</span>
                </div>


            </div>
        )
    }
}

// var Input = React.createClass({
//     render: function() {
//         return <input type="text" onKeyDown={this._handleKeyDown} />;
//     }
// })



