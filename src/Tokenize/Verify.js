import React from 'react';

const Verify = (props) => {
    if (props.currentStep !== 4) return null;

    const { assetType, specificAssetType, tokenContract, token } = props;

    var dict = {
        "one": "Alphapoint Regulated asset backed token (RABT)",
        "two": "ERC-20 (Mint, Burn, Pause)",
        "three": "ERC-20 (Mint, Burn)",
        "four": "ERC-621 Owndership Transferable Tokens"
    }

    var dic = {
        "one": "Reg A",
        "two": "Reg A+",
        "three": "Reg CF",
        "four": "Reg D",
        "five": "Reg S"
    }

    return (
        <div className="verify-container">
            <div><span className="verify-header">Verification</span></div>
            <div id="verify-body">
                <div className="col1">
                    <span style={{ fontSize: "40px", fontWeight: "500", textAlign: "left" }}>Asset Information</span>
                    <div className="verify-row ml-4">
                        <span className="verify-headers text-capitalize">Asset Type:</span> <span className="ml-3 verify-fields text-capitalize">{assetType}</span>

                    </div>
                    <div className="verify-row ml-4">
                        <span className="verify-headers"><span className="text-capitalize">{assetType}</span> Asset:</span> <span className="ml-3 verify-fields text-capitalize"> {specificAssetType}</span>
                    </div>
                    <div className="verify-row ml-4">
                        <span className="verify-headers"> Token Contract:</span> <span className="ml-3 verify-fields text-capitalize"> {dict[tokenContract]}</span>
                    </div>
                    <span style={{ fontSize: "40px", fontWeight: "500", textAlign: "left" }}>Token Information</span>

                    <div className="verify-row">
                        <span className="verify-headers ml-4"> Token Name:</span> <span className="ml-3 verify-fields text-capitalize"> {token.name}</span>
                    </div>
                    <div className="verify-row">
                        <span className="verify-headers ml-4">  Symbol:</span> <span className="ml-3 verify-fields text-capitalize"> {token.symbol}</span>
                    </div>
                    <div className="verify-row">
                        <span className="verify-headers ml-4">  Decimals:</span> <span className="ml-3 verify-fields text-capitalize"> {token.decimals}</span>
                    </div>
                    <div className="verify-row">
                        <span className="verify-headers ml-4">  Issuance Date:</span> <span className="ml-3 verify-fields text-capitalize"> {token.date}</span>
                    </div>
                    <div className="verify-row">
                        <span className="verify-headers ml-4">  Issuance Type:</span> <span className="ml-3 verify-fields text-capitalize"> {dic[token.issuanceType]}</span>
                    </div>
                    <div className="verify-row">
                        <span className="verify-headers ml-4">  Country of Issuance:</span> <span className="ml-3 verify-fields text-capitalize"> {token.country}</span>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Verify;