import React from 'react';

const TokenSelection = (props) => {
    if (props.currentStep !== 2) return null;

    return (
        <div className="container-fluid">
            <div className="question top">
                <span id="asset-question">What kind of token contract would you like to use for your <span style={{ color: "red" }}>{props.specificAssetType}</span>?</span>
            </div>
            <div className="form-container">
                <div className="form-row">
                    <span className="form-row-title">Alphapoint's Regulated Asset Backed Token (RABT)</span>
                    <div className="form-list">
                        <ul>
                            <li className="list-item">Suited for commodities </li>
                            <li className="list-item">Includes 90 day vesting period</li>
                            <li className="list-item">Investor whitelist required to control issuance and trading addresses </li>

                        </ul>
                    </div>
                </div>
                <div className="form-row">
                    <span className="form-row-title">ERC-20 (Mint, Burn, Pause)</span>
                    <div className="form-list">
                        <ul>
                            <li className="list-item"> </li>
                            <li className="list-item"> </li>
                            <li className="list-item"> </li>


                        </ul>
                    </div>
                </div>
                <div className="form-row">
                    <span className="form-row-title">ERC-20 (Mint, Burn)</span>
                    <div className="form-list">
                        <ul>
                            <li className="list-item"> </li>
                            <li className="list-item"> </li>

                        </ul>
                    </div>
                </div>
                <div className="form-row">
                    <span className="form-row-title">ERC 621 Ownership Transferable Tokens</span>
                    <div className="form-list">
                        <ul>
                            <li className="list-item"> </li>
                            <li className="list-item"> </li>
                            <li className="list-item"> </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TokenSelection;