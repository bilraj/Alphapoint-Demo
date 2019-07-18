import React from 'react';

export default class TermsOfService extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: ''
        }
    }

    handleSelect = (event) => {
        event.persist();
        this.props.changeHasRegistered();

        this.setState(() => {
            return {
                selected: event.target.value
            }
        })
    }

    render() {
        if (this.props.currentStep !== 1) return null;
        return (
            <div id="words-container">
                <div className="top-term-message">
                    <i className="fas fa-info-circle ml-2 mt-3 fa-lg"></i>
                    <p id="alert-1">
                        please read these terms of service carefully as they contain important information regarding your legal rights, remedies, and obligations.
                </p>
                </div>
                <div className="top-term-message">
                    <i className="fas fa-info-circle ml-2 mt-3 fa-lg"></i>
                    <p id="alert-2">
                        <b>Your approval is needed</b>: Please read our Terms of Service and use the form at the bottom of the page to indicate that you have read, understand, and agree to the terms.
                </p>
                </div>
                <div id="words">
                    <h1 className="mt-3">Terms of Service ("Terms")</h1>
                    <p>Last updated: July 03, 2019</p>
                    <p>Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the https://alphapointdemo.netlify.com/ website (the "Service") operated by Alphapoint ("us", "we", or "our").

                    Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.

            By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service. The Terms of Service agreement  for Alphapoint has been created with the help of <a href="https://www.termsfeed.com/">TermsFeed</a>.</p>



                    <h2>Links To Other Web Sites</h2>

                    <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by Alphapoint.

                    Alphapoint has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that Alphapoint shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.

            We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.</p>




                    <h2>Governing Law</h2>

                    <p>These Terms shall be governed and construed in accordance with the laws of New York, United States, without regard to its conflict of law provisions.

            Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.</p>


                    <h2>Changes</h2>

                    <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.

            By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.</p>


                    <h2>Contact Us</h2>

                    <p>If you have any questions about these Terms, please contact us.</p>
                </div>

                <div id="confirm">
                    <p className="confirm-words">If you have read, understood, and agree with these Terms of Service please indicate below: </p>
                    <div>
                        <input type="radio" id="yes" onChange={this.handleSelect} value="option" /> <span className="confirm-words"><label className="ml-3" htmlFor="yes">Yes, I agree</label></span>
                    </div>
                    <div className="yes-button" onClick={this.props.incrementStep}>
                        Submit
                </div>
                </div>
            </div>

        )
    }
}

