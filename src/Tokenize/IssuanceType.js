import React, { Component } from 'react';

export default class IssuanceType extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedType: 'one'
        }
    }

    handleClick = (event) => {  
        event.persist();
        this.setState(() => {
            return {
                selectedType: event.target.name
            }
        }, () => {
            this.props.setIssuanceType(this.state.selectedType)
        })

    }

    render() {
        return (
            <div className="issue-container">

                <div style={{ backgroundColor: this.state.selectedType === "one" ? "#009ffd" : "" }}
                    className="asset" >
                    <span className="radio"><input
                        type="radio"
                        name="one"
                        checked={false}
                        onChange={this.handleClick}
                    /></span> <span id="physical-asset">Reg A</span>
                </div>
                <div style={{ backgroundColor: this.state.selectedType === "two" ? "#009ffd" : "" }} className="asset" >
                    <span className="radio"><input
                        type="radio"
                        name="two"
                        checked={false}
                        onChange={this.handleClick}
                    /></span >
                    <span id="financial-asset">Reg A +</span>
                </div>
                <div style={{ backgroundColor: this.state.selectedType === "three" ? "#009ffd" : "" }} className="asset" >
                    <span className="radio"><input
                        type="radio"
                        name="three"
                        checked={false}
                        onChange={this.handleClick}
                    /></span >
                    <span id="financial-asset">Reg CF</span>
                </div>
                <div style={{ backgroundColor: this.state.selectedType === "four" ? "#009ffd" : "" }} className="asset">
                    <span className="radio"><input
                        type="radio"
                        name="four"
                        checked={false}
                        onChange={this.handleClick}
                    /></span >
                    <span id="financial-asset">Reg D</span>
                </div>
                <div style={{ backgroundColor: this.state.selectedType === "five" ? "#009ffd" : "" }} className="asset">
                    <span className="radio"><input
                        type="radio"
                        name="five"
                        checked={false}
                        onChange={this.handleClick}
                    /></span >
                    <span id="financial-asset">Reg S</span>
                </div>
            </div>

        );
    }
}
