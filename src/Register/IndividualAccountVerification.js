import React, { Component } from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';


export default class IndividualAccountVerification extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        if (this.props.currentStep !== 6) return null;
        return (
            <div className="ver-container">
                <div id="verification-top">
                    <b>Verification</b> > <span id="top-word">Personal Information
                </span>
                    <hr className="mt-3" style={{ width: "110%", opacity: ".3" }} />
                </div>
                <div className="">
                    <h2 className="mb-3">Contact Person & Information</h2>
                    <div className="ver-row">

                        <div id="thing1">
                            Last Name
                            <input name="lastName" className="verification-inputs" type="text" placeholder="Last Name" />
                        </div>

                        <div id="thing2">
                            Middle Name
                            <input onChange={this.handleChange} name="middle" className="verification-inputs" type="text" placeholder="Middle Name" />
                        </div>
                        <div id="thing3">
                            First Name
                            <input onChange={this.handleChange} name="first" className="verification-inputs" type="text" placeholder="First Name" />
                        </div>
                    </div>

                    <div className="ver-row">

                        <div id="thing1">
                            Birth day
                            <input name="lastName" className="verification-inputs" type="text" placeholder="Last Name" />
                        </div>

                        <div id="thing2">
                            Birth Month
                            <input onChange={this.handleChange} name="middle" className="verification-inputs" type="text" placeholder="Middle Name" />
                        </div>
                        <div id="thing3">
                            Birth Year
                            <input onChange={this.handleChange} name="first" className="verification-inputs" type="text" placeholder="First Name" />
                        </div>
                    </div>

                    <div>
                        Nationality
                        <div id="country-select-container">
                            <CountryDropdown priorityOptions={['US']} defaultOptionLabel={"Select your nationality"} />
                        </div>
                    </div>
                </div>

                <hr className="mt-5" style={{ width: "110%", opacity: ".3" }} />

                <h2 className="mb-3 mt-4">Contact Information</h2>
                <h5>Telephone Number</h5>
                <div className="ver-row">

                    <div id="thing1">
                        <input name="lastName" className="verification-inputs" name="countryCode" type="text" placeholder="Country Code" />
                    </div>

                    <div id="thing2">
                        <input onChange={this.handleChange} name="areaCode" className="verification-inputs" type="text" placeholder="Area Code" />
                    </div>
                    <div id="thing3">
                        <input onChange={this.handleChange} name="num" className="verification-inputs" type="text" placeholder="Phone Number" />
                    </div>
                </div>
                <div id="final">
                    <h5>Email</h5>
                    <input onChange={this.handleChange} name="num" className="verification-inputs" type="text" placeholder="Email" />
                </div>

                <hr className="mt-5" style={{ width: "110%", opacity: ".3" }} />
                <h2 className="mb-3 mt-4">KYC/AML</h2>

                <div>
                    <form>
                        <input type="file" name="pic" accept="doc/*" />
                    </form>
                </div>

                <div className="submit-button" onClick={this.props.incrementStep}>
                    Submit
                </div>

               



            </div>
        );
    }
}
