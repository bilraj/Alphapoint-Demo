import React, { Component } from 'react';
import TermsOfService from './TermsOfService';
import './styles.css';
import BeginVerification from './BeginVerification';
import PrelimiaryQuestions from './PreliminaryQuestions';
import PleaseUnderstand from './PleaseUnderstand';
import SelectAccountType from './SelectAccountType';
import IndividualAccountVerification from './IndividualAccountVerification';
import Confirmation from './Confirmation';

export default class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            hasRegistered: false,
            currentStep: 1, 
            accountType: ''
        }
    }

    incrementStep = () => {
        if (this.state.currentStep === 1) {
            if (this.state.hasRegistered) {
                this.setState((prevState) => {
                    return {
                        currentStep: prevState.currentStep + 1
                    }
                })
            }
        } else {
            this.setState((prevState) => {
                return {
                    currentStep: prevState.currentStep + 1
                }
            })
        }
    }

    changeHasRegistered = () => {
        this.setState(() => {
            return {
                hasRegistered: true
            }
        })
    }

    setAccountType = (type) => {

        this.setState((prevState) => {
            return {
                accountType: type,
            }
        })
    }

    render() {
        return (
            <>
                <div className="terms-container">
                    <TermsOfService changeHasRegistered={this.changeHasRegistered} incrementStep={this.incrementStep} currentStep={this.state.currentStep} />
                    <BeginVerification currentStep={this.state.currentStep} incrementStep={this.incrementStep}/>
                    <PrelimiaryQuestions currentStep={this.state.currentStep} incrementStep={this.incrementStep} />
                    <PleaseUnderstand currentStep={this.state.currentStep} incrementStep={this.incrementStep} />  
                    <SelectAccountType setAccountType={this.setAccountType} currentStep={this.state.currentStep} incrementStep={this.incrementStep} />
                    <IndividualAccountVerification currentStep={this.state.currentStep} incrementStep={this.incrementStep} />
                    <Confirmation currentStep={this.state.currentStep} incrementStep={this.incrementStep} />
                </div>
            </>
        );
    }
}
