import React, { Component } from 'react';

export default class AssetSetup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            assetType: 'physical',
            specificAssetType: ''
        }

        this.handleAssetChange = this.handleAssetChange.bind(this);
    }


    handleAssetChange(event) {
        event.persist();
        this.setState(() => {
            console.log("Changed to " + event.target.name)
            return {
                assetType: event.target.name
            }
        })
    }


    render() {
        // if (this.props.currentStep !== 1) return null;

        return (
            <div className="container">
                <div><h1 style={{ color: "red", fontWeight: "300", marginBottom: "40px" }}>Step 1</h1></div>
                <div className="question"><span id="asset-question">What type of asset is it?</span></div>
                <div className="topContainer">
                    <form>
                        <div className="asset" id={this.state.assetType === "physical" ? "greyed" : ""}>
                            <span className="radio"><input
                                type="radio"
                                name="physical"
                                checked={this.state.assetType === "physical"}
                                onChange={this.handleAssetChange}
                            /></span> <span id="physical-asset">Physical</span>
                        </div>
                        <div className="asset" id={this.state.assetType === "financial" ? "greyed" : ""}>
                            <span className="radio"><input
                                type="radio"
                                name="financial"
                                checked={this.state.assetType === "financial"}
                                onChange={this.handleAssetChange} /></span >
                            <span id="financial-asset">Financial</span>
                        </div>
                    </form>

                </div>


                <div className="bottomContainer">
                    <div className="selection">
                        <form>
                            <div className="asset">
                                <span className="radio"><input type="radio" name="asset" /></span> <span>Physical</span>
                            </div>
                            <div className="asset">
                                <span className="radio"><input type="radio" name="asset" /></span> <span>Financial</span>
                            </div>
                        </form>
                    </div>
                    <div className="selection">

                    </div>
                </div>



            </div>
        )


    }
}
