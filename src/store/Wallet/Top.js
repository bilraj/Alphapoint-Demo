import React, { Component } from 'react';
import { ButtonContainer } from '../Button';
import { WalletConsumer } from '../../WalletContext';
import { TokenConsumer } from '../../TokenContext';
import './styles.css'

export default class Top extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedItem: this.props.value.balances[0],
            showItems: false
        }
    }

    componentDidMount() {
        if (localStorage.getItem("selectedItem") !== null) {
            this.setState(() => {
                return {
                    selectedItem: JSON.parse(localStorage.getItem("selectedItem"))
                }
            })
        } else {
            localStorage.setItem("selectedItem", JSON.stringify(this.state.selectedItem));
        }
    }

    dropdown = () => {
        this.setState(() => {
            console.log("Changing")
            return {
                showItems: !this.state.showItems
            }
        })
    }

    setSelected = (item) => {
        this.setState(() => {
            return {
                selectedItem: item,
                showItems: false
            }
        })
    }

    fix = (num) => {
        return parseFloat(num).toFixed(2);
    }

    render() {
        return (
            <WalletConsumer>
                {(value) => {
                    const { toggleModal, balances } = value;

                    const bal = parseFloat((balances[0].balance * 1).toFixed(2));
                    return (
                        <TokenConsumer>
                            {(val) => {
                                const { haveToken, balance } = val;
                                const { symbol } = val.tokens;

                                return (
                                    <React.Fragment>
                                        <div className="d-flex justify-content-space-between" style={{ height: "fit-content", width: "100%", marginBottom: "20px" }}>
                                            <div className="ml-4 mt-2" style={{ position: "relative", width: "100%" }} >
                                                <ButtonContainer onClick={() => toggleModal()}>Send</ButtonContainer>
                                                <ButtonContainer>Request</ButtonContainer>
                                                <div className="balance-container">
                                                    <div onClick={this.dropdown} className="balance-header" >
                                                        <h4>Balance: {this.fix(this.state.selectedItem.balance)} {this.state.selectedItem.sym}</h4>
                                                        <span style={{ marginLeft: "auto", marginRight: "10px", cursor: "pointer" }}><i className="fas fa-chevron-down"></i></span>
                                                    </div>
                                                    <div style={{ display: this.state.showItems ? "block" : "none" }} className="balance-dropdown">
                                                        {
                                                            value.balances.map(item => {
                                                                return (
                                                                    <div
                                                                        className="item"
                                                                        key={item.id}
                                                                        onClick={() => this.setSelected(item)}
                                                                    >
                                                                        {this.fix(item.balance)} {item.sym}
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </React.Fragment>
                                )
                            }}
                        </TokenConsumer>

                    )
                }}
            </WalletConsumer>

        );
    }
}