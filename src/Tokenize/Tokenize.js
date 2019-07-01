import React, { Component } from 'react';
import Menu from '../store/Wallet/Menu';
import AssetSetup from './AssetSetup';
import './tokenStyles.css';
import TokenSelection from './TokenSelection';
import Contract from './Contract';
import Verify from './Verify';
import { Link } from 'react-router-dom';
import { TokenConsumer } from '../TokenContext';


export default class Tokenize extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentStep: 1,
            assetType: 'physical',
            specificAssetType: 'land',
            tokenContract: "one",
            token: {
                name: "",
                symbol: "",
                decimals: 0,
                date: "",
                companyName: "",
                issuanceType: "",
                country: ""
            }
        }
    }

    componentDidMount() {
        console.log("MOUNTING")
        if (localStorage.getItem("currentStep") !== null) {
            this.setState(() => {
                return {
                    currentStep: JSON.parse(localStorage.getItem("currentStep"))
                }
            })
        }
        if (localStorage.getItem("assetType") !== null) {
            this.setState(() => {
                return {
                    assetType: JSON.parse(localStorage.getItem("assetType"))
                }
            })
        }
        if (localStorage.getItem("specificAssetType") !== null) {
            this.setState(() => {
                return {
                    specificAssetType: JSON.parse(localStorage.getItem("specificAssetType"))
                }
            })
        }
        if (localStorage.getItem("tokenContract") !== null) {
            this.setState(() => {
                return {
                    tokenContract: JSON.parse(localStorage.getItem("tokenContract"))
                }
            })
        }
        if (localStorage.getItem("token") !== null) {
            this.setState(() => {
                return {
                    token: JSON.parse(localStorage.getItem("token"))
                }
            })
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
        },
            () => {
                localStorage.setItem("specificAssetType", JSON.stringify(this.state.specificAssetType))
            })
    }

    handleSubmit = (event) => {
        const { assetType, specificAssetType } = this.state;
        console.log(`Asset type: ${assetType} and Specific asset ${specificAssetType}`);
    }

    handleTokenContract = (contract) => {
        this.setState(() => {
            return {
                tokenContract: contract
            }
        }, () => { console.log("CONTRACT: " + this.state.tokenContract) })
    }

    _next = () => {
        let currentStep = this.state.currentStep;
        currentStep = currentStep >= 3 ? 4 : currentStep + 1;
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
        if (currentStep < 4) {
            return (
                <div className="button1" onClick={this._next}>
                    <span>Continue</span>
                </div>
            )
        }
        else if (currentStep === 4) {
            return (
                <Link to="/">
                    <div className="button1" onClick={() => this.registerToken()}>
                        <span>Verify</span>
                    </div>
                </Link>
            )
        }

        return null;
    }

    /*
                    name: "",
                symbol: "",
                decimals: 0,
                date: "",
                companyName: "",
                issuanceType: "",
                country: "" */

    handleContract = (object) => {
        this.setState((prevState) => {
            let temp = { ...prevState.token };
            temp.name = object.name;
            temp.date = object.date;
            temp.symbol = object.symbol;
            temp.decimals = object.decimals;
            temp.companyName = object.companyName;
            temp.country = object.country;
            return {
                token: { ...temp }
            }
        }, () => {
            localStorage.setItem("token", JSON.stringify(this.state.token));
            // alert("OBJECT: " + JSON.stringify(this.state.token))
        }
        )
    }

    setIssuanceType = (type) => {
        this.setState((prevState) => {
            let temp = { ...prevState.token };
            temp.issuanceType = type;
            return {
                token: { ...temp }
            }
        }, () => {
            console.log("TYPE: " + JSON.stringify(this.state.token))
            localStorage.setItem("token", JSON.stringify(this.state.token));

        })
    }

    setTokenName = (name) => {
        this.setState((prevState) => {
            let temp = { ...prevState.token };
            temp.name = name;
            return {
                token: { ...temp }
            }
        }, () => {
            console.log("TYPE: " + JSON.stringify(this.state.token))
            localStorage.setItem("token", JSON.stringify(this.state.token));

        })
    }

    registerToken = () => {
        var obj = {
            sym: this.state.token.symbol,
            name: this.state.token.name,
            balance: 0,
            conversionRate: 1,
            logo: "fas fa-box"
        }

        var token = {
            id: this.props.nextId,
            name: this.state.token.name,
            symbol: this.state.token.symbol,
            decimals: this.state.token.decimals,
            date: this.state.token.date,
            companyName: this.state.token.companyName,
            issuanceType: this.state.token.issuanceType,
            country: this.state.token.country,
            balance: 0
        }

        alert("TOKEN: " + JSON.stringify(token));
        alert("OBJ: " + JSON.stringify(obj));


        alert("Registering")

        this.props.value.addNewCurrency(obj);
        this.props.value.addToken(token)
    }

    render() {
        return (
            <div className="container-fluid">
                <div style={{ height: "100%", width: "100%" }} className="d-flex flex-direction-column ">
                    <Menu />
                    <div>
                        <div className="container-fluid" style={{ width: "1100px", textAlign: "center" }}>
                            <div style={{ marginTop: "50px", marginLeft: "20px", fontWeight: "bold", color: "red" }}>
                            </div>

                            <AssetSetup
                                currentStep={this.state.currentStep}
                                assetType={this.state.assetType}
                                handleAssetChange={this.handleAssetChange.bind(this)}
                                handleSpecificAssetChange={this.handleSpecificAssetChange.bind(this)} />

                            <TokenSelection
                                specificAssetType={this.state.specificAssetType}
                                currentStep={this.state.currentStep}
                                handleTokenContract={this.handleTokenContract}
                            />

                            <Contract
                                currentStep={this.state.currentStep}
                                setIssuanceType={this.setIssuanceType}
                                handleContract={this.handleContract}
                            />

                            <Verify
                                {...this.state}
                                currentStep={this.state.currentStep}
                            />
                        </div>
                        <div className="d-flex justify-content-center">
                            <span id="prev">{this.previousButton}</span>
                            <span id="next">{this.nextButton}</span>
                        </div>
                    </div>
                    {/* <span id="welcome-text">Asset Tokenization</span> */}
                </div>
            </div>

        );
    }
}
