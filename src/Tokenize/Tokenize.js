import React, { Component } from 'react';
import Menu from '../store/Wallet/Menu';
import AssetSetup from './AssetSetup';
import './tokenStyles.css';

export default class Tokenize extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentStep: 1,
            assetType: 'physical',
            specificAssetType: 'land'
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
        console.log(`Asset type: ${assetType} and Specific asset ${specificAssetType}`)
    }

    render() {
        return (
            <div className="cont">
                <div style={{ height: "100%" }} className="d-flex flex-direction-row">
                    <Menu />
                    <form>
                        <div className="container-fluid tokenization-container" style={{ height: "100vh", width: "100vw"}}>
                            <div style={{width:"100%", marginTop:"20px", marginLeft:"20px", color:"rgb(35, 37, 40)"}}><span style={{ fontSize: "26px", color: "rgb(35, 37, 40)", fontWeight: "400" }}>Step 1</span></div>

                            <AssetSetup 
                                    currentStep={this.state.currentStep} 
                                    assetType={this.state.assetType} 
                                    handleAssetChange={this.handleAssetChange.bind(this)}
                                    handleSpecificAssetChange={this.handleSpecificAssetChange.bind(this)} />
                        </div>

                    </form>

                    {/* <span id="welcome-text">Asset Tokenization</span> */}
                </div>
            </div>

        );
    }
}
