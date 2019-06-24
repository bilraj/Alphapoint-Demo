import React, { Component } from 'react';
import Menu from '../store/Wallet/Menu';
import AssetSetup from './AssetSetup';
import './tokenStyles.css';
import TokenSelection from './TokenSelection';

export default class Tokenize extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentStep: 2,
            assetType: 'physical',
            specificAssetType: 'land',
            tokenContract: ''
        }
    }

    handleAssetChange = (event) => {
        event.persist();
        this.setState(() => {
            const temp = event.target.name === "physical" ? "land" : "debt-issuance";
            return {
                assetType: event.target.name,
                specificAssetType: temp
            }
        })
    }

    handleSpecificAssetChange = (event) => {
        event.persist();
        this.setState(() => {
            return {
                specificAssetType: event.target.name
            }
        })
    }

    handleSubmit = (event) => {
        const { assetType, specificAssetType } = this.state;
        console.log(`Asset type: ${assetType} and Specific asset ${specificAssetType}`);

    }

    _next = () => {
        let currentStep = this.state.currentStep;
        currentStep = currentStep >= 2 ? 3 : currentStep + 1;
        this.setState(() => {
            return {
                currentStep: currentStep
            }
        })
    }

    _prev = () => {
        let currentStep = this.state.currentStep;
        currentStep = currentStep <= 1 ? 1 : currentStep - 1;
        this.setState(() => {
            return {
                currentStep: currentStep
            }
        })
    }

    get previousButton() {
        let currentStep = this.state.currentStep;

        // If the current step is not 1, then render the "previous" button
        if (currentStep !== 1) {
            return (
                <div className="button2" onClick={this._prev}>
                    <span>Back</span>
                </div>
            )
        }

        return null;
    }

    get nextButton() {
        let currentStep = this.state.currentStep;
        if (currentStep < 3) {
            return (
                <div className="button1" onClick={this._next}>
                    <span>Continue</span>
                </div>
            )
        }

        return null;
    }

    render() {
        return (
            <div className="container-fluid">
                <div style={{ height: "100%", width:"100%"}} className="d-flex flex-direction-column ">
                    <Menu />
                    <form onSubmit={this.handleSubmit}>
                        <div className="container-fluid" style={{width:"1100px", textAlign:"center"}}>
                            <div style={{ marginTop: "50px", marginLeft: "20px", fontWeight: "bold", color: "red" }}>
                                <span style={{ fontSize: "26px", fontWeight: "400" }}>Step {this.state.currentStep}:</span>
                            </div>

                            <AssetSetup
                                currentStep={this.state.currentStep}
                                assetType={this.state.assetType}
                                handleAssetChange={this.handleAssetChange.bind(this)}
                                handleSpecificAssetChange={this.handleSpecificAssetChange.bind(this)} />

                            <TokenSelection
                                specificAssetType={this.state.specificAssetType}
                                currentStep={this.state.currentStep}

                            />
                        </div>
                        <span id="prev">{this.previousButton}</span>
                        <span id="next">{this.nextButton}</span>

                    </form>

                    {/* <span id="welcome-text">Asset Tokenization</span> */}
                </div>
            </div>

        );
    }
}
