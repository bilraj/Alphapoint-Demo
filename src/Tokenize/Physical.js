import React, { Component } from 'react';

export default class Physical extends Component {
    constructor(props) {
        super(props);
        this.state = {
            specificAssetType: 'land'
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
                <div className="asset" id={this.state.specificAssetType === "land" ? "greyed" : ""}>
                    <span className="radio"><input
                        type="radio"
                        name="land"
                        checked={this.state.specificAssetType === "land"}
                        onChange={this.handleChange}
                    /></span> <span id="physical-asset">Land</span>
                </div>
                <div className="asset" id={this.state.specificAssetType === "trademark" ? "greyed" : ""}>
                    <span className="radio"><input
                        type="radio"
                        name="trademark"
                        checked={this.state.specificAssetType === "trademark"}
                        onChange={this.handleChange} /></span >
                    <span id="financial-asset">Trademark</span>
                </div>
                <div className="asset" id={this.state.specificAssetType === "vehicle" ? "greyed" : ""}>
                    <span className="radio"><input
                        type="radio"
                        name="vehicle"
                        checked={this.state.specificAssetType === "vehicle"}
                        onChange={this.handleChange} /></span >
                    <span id="financial-asset">Vehicle</span>
                </div>
                <div className="asset" id={this.state.specificAssetType === "gold" ? "greyed" : ""}>
                    <span className="radio"><input
                        type="radio"
                        name="gold"
                        checked={this.state.specificAssetType === "gold"}
                        onChange={this.handleChange} /></span >
                    <span id="financial-asset">Gold</span>
                </div>
            </form>
        )
    }    
    
}
