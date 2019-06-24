import React, { Component } from 'react';
import Physical from './Physical';
import Financial from './Financial';
import './styles.css';

const AssetSetup = (props) => {
    if (props.currentStep !== 1) return null;
    return (
        <div className="c">
            {/* <div><span style={{ fontSize:"26px", color: "rgb(35, 37, 40)", fontWeight: "400", position:"absolute", left:"0", marginLeft:"20px", marginTop:"20px" }}>Step 1</span></div> */}
            <div className="first" style={{ width: "100%" }}>

                <div className="question top"><span id="asset-question">What type of asset is it?</span></div>
                <div className="topContainer">
                    <form>
                        <div className="asset" id={props.assetType === "physical" ? "greyed" : ""}>
                            <span className="radio"><input
                                type="radio"
                                name="physical"
                                checked={props.assetType === "physical"}
                                onChange={props.handleAssetChange}
                            /></span> <span id="physical-asset">Physical</span>
                        </div>
                        <div className="asset" id={props.assetType === "financial" ? "greyed" : ""}>
                            <span className="radio"><input
                                type="radio"
                                name="financial"
                                checked={props.assetType === "financial"}
                                onChange={props.handleAssetChange} /></span >
                            <span id="financial-asset">Financial</span>
                        </div>
                    </form>
                </div>
            </div>

            <div className="first" style={{ width: "100%" }}>
                <div className="question" id="asset-question">What type of <span className="text-capitalize text-danger">{props.assetType}</span> Asset?</div>
                <div className="bottomContainer">
                    {
                        props.assetType === "physical" ?
                            <Physical assetType={props.assetType} handleSpecificAssetChange={props.handleSpecificAssetChange.bind(props)} specificAssetType={props.specificAssetType} /> :
                            <Financial assetType={props.assetType} handleSpecificAssetChange={props.handleSpecificAssetChange.bind(props)} specificAssetType={props.specificAssetType} />

                    }
                </div>
            </div>


            {/* <div className="button">
               <span>Continue</span>
            </div> */}



        </div>
    )
}

export default AssetSetup;