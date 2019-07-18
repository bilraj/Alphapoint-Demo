import React, { Component } from 'react';
import './styles.css';
import WalletConsumer from '../../../WalletContext';

export default class FromBox extends Component {
    state = {
        items: this.props.value.balances || [],
        showItems: false,
        selectedItem: this.props.value.balances[0],
    }

    render() {

        const adjusted = parseFloat((this.props.value.send.selectedItem.balance * 1).toFixed(2));
        // alert(JSON.stringify(this.state));

        // alert("FROMBOX: " + JSON.stringify(this.props.value.balances[0]));
        //     { sym: "XRP", name: "Ripple",  balance: 91, id:3, conversionRate:"", logo: "fas fa-box" }
        return (
            <div className="container">
                <div className="from-box" onClick={this.dropDown}>
                    <div id="wallet-box">
                        <span>My {this.props.value.send.selectedItem.name} Wallet</span> ({adjusted} {this.props.value.send.selectedItem.sym})
                    </div>
                    <div id="down-icon">
                        <span><i className="fas fa-chevron-down"></i></span>
                    </div>
                </div>
                <div style={{ display: this.state.showItems ? "block" : "none" }} className="items">
                    {
                        this.state.items.filter(it => it.name === this.props.value.send.selectedItem.name).map(item => {
                            const adjusted = parseFloat((item.balance * 1).toFixed(2));
                            return (
                                <div
                                    key={item.id}
                                    onClick={() => {
                                        this.selectItem(item);
                                    }
                                    }

                                    className={this.state.selectedItem === item ? "item selected" : "item"}>
                                    <div className="row-thing">
                                        My {item.name} Wallet {item.value} ({adjusted} {item.sym})
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
            </div>

        )
    }

    selectItem = (item) => {

        this.setState(() => {
            return {
                selectedItem: item,
                showItems: false
            }
        }, () => console.log("Set selected item to: " + item.name))
    }


    dropDown = () => {
        this.setState((prevState) => {
            return {
                showItems: !prevState.showItems
            }
        });
    }
}