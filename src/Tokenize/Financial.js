
import React, { Component } from 'react';

export default class Financial extends Component {
    constructor(props){
        super(props);
        this.state = {
            specificAssetType: 'debt-issuance'
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        event.persist();
        this.setState(() => {
            return {
                specificAssetType: event.target.name
            }
        }, () => {
            this.props.handleSpecificAssetChange(event);
        })
    }
    render() {
        return (
            <form>
                <div className="asset" id={this.state.specificAssetType === "debt-issuance" ? "greyed" : ""}>
                    <span className="radio"><input
                        type="radio"
                        name="debt-issuance"
                        checked={this.state.specificAssetType === "debt-issuance"}
                        onChange={this.handleChange}
                    /></span> <span id="physical-asset">Debt Issuance</span>
                </div>
                <div className="asset" id={this.state.specificAssetType === "equity-fund" ? "greyed" : ""}>
                    <span className="radio"><input
                        type="radio"
                        name="equity-fund"
                        checked={this.state.specificAssetType === "equity-fund"}
                        onChange={this.handleChange} /></span >
                    <span id="financial-asset">Equity Fund</span>
                </div>
                <div className="asset" id={this.state.specificAssetType === "real-estate" ? "greyed" : ""}>
                    <span className="radio"><input
                        type="radio"
                        name="real-estate"
                        checked={this.state.specificAssetType === "real-estate"}
                        onChange={this.handleChange} /></span >
                    <span id="financial-asset">Real Estate (single asset)</span>
                </div>
                <div className="asset" id={this.state.specificAssetType === "ico" ? "greyed" : ""}>
                    <span className="radio"><input
                        type="radio"
                        name="ico"
                        checked={this.state.specificAssetType === "ico"}
                        onChange={this.handleChange} /></span >
                    <span id="financial-asset">ICO</span>
                </div>
            </form>
        );
    }
}
