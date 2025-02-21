import React, { Component } from 'react';
import './styles.css'
import BuyForm from './BuyForm';
import { CheckoutFormA, CheckoutFormB } from './CheckoutForm';
import CheckoutTop from './CheckoutTop';
import { ButtonContainer } from '../../Button';
import PaymentSuccess from './PaymentSuccess';


export default class BuyTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            amount: '',
            paymentSuccess: false,
            currentStep: 1,
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
        }, () => {
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

        this.props.addNewCurrency(obj)
        this.setState(() => {
            return {
                paymentSuccess: true,
                amount: ''
            }
        })

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
        currentStep = currentStep >= 4 ? 5 : currentStep + 1;
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

        else if (currentStep === 5) {
            this.setState(() => {
                return {
                    currentStep: 1
                }
            })
        }
    }

    get previousButton() {
        let { currentStep } = this.state;
        if (currentStep !== 1 && currentStep !== 4) {
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
            this.handleSubmit();
            this._next();
        }
    }

    resetStep = () => {
        this.setState(() => {
            return {
                currentStep: 1
            }
        })
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

        const  sym  = this.props.value.balances[4].sym;
        const { balances } = this.props.value;
        var { name } = balances.find((element) => {
            return sym === element.sym;
        });

        // If no new coin, add to wallet
        return (
            <div className="buy-container">
                <CheckoutTop currentStep={this.state.currentStep} symbol={sym} amount={this.state.amount} />
                <BuyForm name={name} symbol={sym} value={this.state} updateCurrentStep={this.updateCurrentStep} handleChange={this.handleChange} currentStep={this.state.currentStep} />
                <CheckoutFormA handleSubmitBillingAddress={this.handleSubmitBillingAddress} handleFieldChange={this.handleFieldChange} symbol={sym} amount={this.state.amount} currentStep={this.state.currentStep} />
                <CheckoutFormB handleSubmitPayment={this.handleSubmitPayment} handleFieldChange={this.handleFieldChange} symbol={sym} amount={this.state.amount} currentStep={this.state.currentStep} />
                <div className="buttons">
                    <span id="buy-prev-button">{this.previousButton}</span>
                    <span>{this.nextButton}</span>
                </div>

                <PaymentSuccess resetStep={this.resetStep} currentStep={this.state.currentStep} addNewCurrency={this.props.addNewCurrency} amount={this.state.amount} name={name} />


            </div>
        )
    }
}

// var Input = React.createClass({
//     render: function() {
//         return <input type="text" onKeyDown={this._handleKeyDown} />;
//     }
// })



