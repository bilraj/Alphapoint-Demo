import React from 'react';

export default class TokenSelection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "one"
        }
    }
    render() {
        if (this.props.currentStep !== 2) return null;

        return (
            <div className="container-fluid">
                <div className="question top">
                    <span id="asset-question">What kind of token contract would you like to use for your <span style={{ color: "red" }}>{this.props.specificAssetType}</span>?</span>
                </div>
                <div className="form-container">

                    <div onClick={() => {
                        this.props.handleTokenContract("one");
                        this.setState({ value: "one" })
                    }} style={{ backgroundColor: this.state.value === "one" ? "#e1e5eb" : "" }} className="form-row">
                        <span className="form-row-title">Alphapoint's Regulated Asset Backed Token (RABT)</span>
                        <div className="form-list">
                            <ul>
                                <li className="list-item">Suited for commodities </li>
                                <li className="list-item">Includes 90 day vesting period</li>
                                <li className="list-item">Investor whitelist required to control issuance and trading addresses </li>
                            </ul>
                        </div>

                    </div>

                    <div onClick={() => {
                        this.props.handleTokenContract("two");
                        this.setState({ value: "two" })
                    }} style={{ backgroundColor: this.state.value === "two" ? "#e1e5eb" : "" }} className="form-row">

                        <span className="form-row-title">ERC-20 (Mint, Burn, Pause)</span>
                        <div className="form-list">
                            <ul>
                                <li className="list-item">Suited for assets that appreciate </li>
                                <li className="list-item">Includes ability to mint and burn tokens</li>
                                <li className="list-item">Includes ability to global pause trading </li>
                            </ul>
                        </div>
                    </div>
                    <div onClick={() => {
                        this.props.handleTokenContract("three");
                        this.setState({ value: "three" })
                    }} style={{ backgroundColor: this.state.value === "three" ? "#e1e5eb" : "" }} className="form-row">
                        <span className="form-row-title">ERC-20 (Mint, Burn)</span>
                        <div className="form-list">
                            <ul>
                                <li className="list-item"> Suited for equity shares</li>
                                <li className="list-item"> Includes ability to mint and burn tokens</li>

                            </ul>
                        </div>
                    </div>
                    <div onClick={() => {
                        this.props.handleTokenContract("four");
                        this.setState({ value: "four" })
                    }} style={{ backgroundColor: this.state.value === "four" ? "#e1e5eb" : "" }} className="form-row">
                        <span className="form-row-title">ERC 621 Ownership Transferable Tokens</span>
                        <div className="form-list">
                            <ul>
                                <li className="list-item"> Suited for equity shares</li>
                                <li className="list-item"> Includes ability to mint and burn tokens</li>
                                <li className="list-item">Includes ability to force transfer tokens between user wallets </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}