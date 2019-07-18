import React, { Component } from 'react';

import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

export default class PrelimiaryQuestions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            country: '',
            region: ''
        }
    }

    selectCountry = (val) => {
        this.setState(() => {
            return {
                country: val
            }
        })
    }

    render() {
        if(this.props.currentStep !== 3) return null;
        const { country } = this.state;

        return (
            <div className="noselect" id="preliminary-questions-container">
                <div id="verification-top">
                    <b>Verification</b> > <span id="top-word">Preliminary Questions</span>
                    <hr style={{ width: "100%", opacity: ".3" }} />
                </div>
                <div className="top-term-message">
                    <i className="fas fa-info-circle ml-2 mt-3 fa-lg"></i>
                    <p id="alert-2">
                        Before beginning the verification process, please answer some preliminary questions.
                    </p>
                </div>
                <div id="preliminary-body">
                    <div id="country-select-container">
                        <h5>Residential Country:</h5>
                        <CountryDropdown priorityOptions={['US']} defaultOptionLabel={"Select your country"} value={country} onChange={(val) => this.selectCountry(val)} />
                    </div>

                    <div id="reasons-container">
                        <h5>Reasons for requesting verification (<i style={{ fontWeight: "200" }}>check all that apply</i>) </h5>
                        <div id="reasons">
                            <div><input type="radio" className="mr-2" /> <span>I want to deposit and/or withdraw crypto currencies with no daily limits</span></div>
                            <div><input type="radio" className="mr-2" /> <span>I want to exchange and/or margin trade all TGS currencies and pairs</span></div>
                            <div><input type="radio" className="mr-2" /> <span>I want to partake in the peer-to-peer lending market</span></div>
                            <div><input type="radio" className="mr-2" /> <span>I want to deposit and/or withdraw USD (other fiat currencies)</span></div>
                            <div><input type="radio" className="mr-2" /> <span>I want to deposit and/or withdraw Tether USD (or other Tether currencies)</span></div>
                            <div><input type="radio" className="mr-2" /> <span>I want full access to trading and funding APIs</span></div>
                        </div>
                    </div>

                    <div onClick={this.props.incrementStep} id="continue-button">
                        Continue
                    </div>
                </div>
            </div>

        );
    }
}



/*
I want to deposit and/or withdraw crypto currencies with no daily limits
I want to exchange and/or margin trade all TGS currencies and pairs
I want to partake in the peer-to-peer lending market
I want to deposit and/or withdraw USD (other fiat currencies)
I want to deposit and/or withdraw Tether USD (or other Tether currencies)
I want full access to trading and funding APIs
*/