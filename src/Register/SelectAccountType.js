import React from 'react';

export default class SelectAccountType extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            accountSelected: false
        }
    }

    handleClick = (type) => {
        this.props.setAccountType(type);
        this.setState(() => {
            return {
                accountSelected: true
            }
        })
    }

    render() {
        if (this.props.currentStep !== 5) return null;
        return (
            <div className="noselect" id="preliminary-questions-container">
                <div id="verification-top">
                    <b>Verification</b> > <span id="top-word">Account Type
                </span>
                    <hr style={{ width: "100%", opacity: ".3" }} />
                </div>
                <h5 className="mt-4">TGS offers two types of accounts. Select one to continue:</h5>
                <div id="account-container">
                    <div id="individual">
                        <div><i className="fas fa-user fa-5x faded" style={{ marginLeft: "30px", opacity: ".2", zIndex: "-1", }}></i></div>
                        <h5>Individual account</h5>
                        <h6>An account in the name of an individual</h6>
                        <div onClick={() => this.handleClick("individual")} className="select-button">
                            Select Individual Account
                    </div>
                    </div>
                    <div id="corporate">
                        <div><i className="fas fa-building fa-5x faded-2" style={{ marginLeft: "30px", opacity: ".2", zIndex: "-1", }}></i> </div>
                        <h5>Corporate Account account</h5>
                        <h6>An account in the name of a corporation</h6> <h6> partnership, or bank</h6>
                        <div onClick={() => this.handleClick("corporate")} className="select-button">
                            Select Corporate Account
                        </div>
                    </div>
                </div>

                <div className="account-info" style={{ display: this.state.accountSelected ? "" : "none" }}>
                    <hr style={{ width: "100%", opacity: ".3" }} />
                    <h3 style={{display:"inline"}}>Verification Requirements: </h3> <span id="ind-account-word">Individual Account</span>
                    <div id="requirements">
                        <span>1. Complete online form.</span>
                        <span>2. Age: at least 18 years old.</span>
                        <span>3. Information: telephone number, email address, residential address.</span>
                        <span>4. Identification: two forms of valid government issued id with picture; i.e., passport, national ID card, driving license, residency card, employment permit card, etc. If you don not have 2 forms of ID, you can provide only one card and contact compliance@TGS.com to arrange for a Skype or google hangout call.</span>
                        <span>5. Bank Statement: clearly highlighting your name as the account holder (your first deposit to TGS must come from this account).</span>
                        <span>6. Proof of Address: A statement not older than 3 months from a utility, service company, licensed corporation or government authority clerly indicating your name and residential address.</span>
                    </div>
                    <div className="mt-5">
                        <h5>Please Note</h5>
                        <div className="form-list">
                            <ul>
                                <li className="list-item">All documents provided must be in Roman/Latin alphabet or a certified English translation is required. </li>
                                <li className="list-item">All files uploaded must be in PDF, PNG, JPG, or ZIP</li>
                                <li className="list-item">All fields in the following verification form are mandatory (NA for Non Applicable can be used). </li>
                                <li className="list-item">To avoid possible delays, please check the correctness before submitting documents, please doubly check you do not send the same documents twice and possibly forget one.</li>

                            </ul>
                        </div>
                    </div>

                    <div onClick={this.props.incrementStep} id="continue-to-verification-button">
                        Continue to Individual Verification
                    </div>

                </div>
            </div>

        )
    }

}


/*
Verification Requirements: Individual Account

1. Complete online form.
2. Age: at least 18 years old.
3. Information: telephone number, email address, residential address.
4. Identification: two forms of valid government issued id with picture; i.e., passport, national ID card, driving license, residency card, employment permit card, etc. If you don not have 2 forms of ID, you can provide only one card and contact compliance@TGS.com to arrange for a Skype or google hangout call.
5. Bank Statement: clearly highlighting your name as the account holder (your first deposit to TGS must come from this account).
6. Proof of Address: A statement not older than 3 months from a utility, service company, licensed corporation or government authority clerly indicating your name and residential address.

Please note:
All documents provided must be in Roman/Latin alphabet or a certified English translation is required.
All files uploaded must be in PDF, PNG, JPG, or ZIP
All fields in the following verification form are mandatory (NA for Non Applicable can be used).
To avoid possible delays, please check the correctness before submitting documents, please doubly check you do not send the same documents twice and possibly forget one.

*/