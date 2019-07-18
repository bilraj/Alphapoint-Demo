import React, { Component } from 'react';
import IssuanceType from './IssuanceType';

var object = {
    name: "",
    symbol: "",
    decimals: 0,
    date: "",
    companyName: "",
    issuanceType: "",
    country: ""
}


export default class Contract extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            symbol: "",
            decimals: 0,
            date: "",
            companyName: "",
            issuanceType: "",
            country: ""
        }
    }

    handleChange = (event) => {
        event.persist();
        this.setState(() => {
            return {
                [event.target.name]: event.target.value
            }
        }, () => {
        })
    }

    handleSubmit = () => {
        var obj = {
            name: this.state.name,
            symbol: this.state.symbol,
            decimals: this.state.decimals,
            date: this.state.date,
            companyName: this.state.companyName,
            issuanceType: this.state.issuanceType,
            country: this.state.country
        }

        this.props.handleContract(obj);
    }

    render() {
        if (this.props.currentStep !== 3) return null;

        return (
            <div className="container-fluid">
                <div className="container-body">

                    <div className="question top">
                        <span id="asset-question">How would you like to define your token?</span>
                    </div>
                    <div className="words">
                        <span>Token Name <span style={{ color: "red" }}>*</span></span>
                    </div>
                    <div>
                        <input name="name" onChange={this.handleChange} value={this.state.name} className="inputs" type="text" placeholder="Name" />
                    </div>

                    <div className="words">
                        <span>Token Symbol <span style={{ color: "red" }}>*</span></span>
                    </div>
                    <div >
                        <input onBlur={this.handleSubmit} onChange={this.handleChange} value={this.state.symbol} name="symbol"  className="inputs" type="text" placeholder="Symbol" />
                    </div>
                    <div className="words">
                        <span>Decimal Points <span style={{ color: "red" }}>*</span></span>
                    </div>
                    <div >
                        <input onChange={this.handleChange} value={this.state.decimals} name="decimals" className="inputs" type="text" placeholder="Decimals" />
                    </div>
                    <div className="words">
                        <span>Issuance Date </span>
                    </div>
                    <div >
                        <input onChange={this.handleChange} value={this.state.date} name="date" className="inputs" type="date" placeholder="Decimals" />
                    </div>
                    <div className="words">
                        <span>Company Name</span>
                    </div>
                    <div>
                        <input onChange={this.handleChange} value={this.state.companyName} name="companyName" className="inputs" type="text" placeholder="Company" />
                    </div>
                    <div className="words">
                        <span>Issuance Type</span>
                    </div>
                    <div>
                        <IssuanceType setIssuanceType={this.props.setIssuanceType} />
                    </div>

                    <div className="words">
                        <span>Country of Issuance</span>
                    </div>
                    <div>
                        <input onChange={this.handleChange} value={this.state.country} name="country" className="inputs" type="text" placeholder="Country" />
                    </div>
                </div>
            </div>
        );
    }




}