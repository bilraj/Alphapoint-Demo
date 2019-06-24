import React, { Component } from 'react';
import Menu from '../store/Wallet/Menu';
import AssetSetup from './AssetSetup';
import './tokenStyles.css';

export default class Tokenize extends Component {
    render() {
        return (
            <div className="cont">
                <div style={{ height: "100%" }} className="d-flex flex-direction-column">
                    <Menu />
                    <div className="container-fluid tokenization-container" style={{height:"100vh", width:"100vw"}}>
                        <span id="welcome-text">Asset Tokenization</span>
                        <AssetSetup />
                    </div>
                </div>
            </div>

        );
    }
}
