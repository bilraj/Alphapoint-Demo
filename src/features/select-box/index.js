import React, { Component } from 'react';
import './styles.css';
import { SendConsumer } from '../../store/Wallet/SendModal/SendContext';
export default class SelectBox extends Component {
    state = {
        items: this.props.items || [],
        showItems: false,
        selectedItem: this.props.items[0]
    }

    render() {

        return (
            <SendConsumer>
                {(value) => {
                    const { setCurrency } = value;
                    return (
                        <div className="container">
                            <div className="select-box" onClick={this.dropDown}>
                                <div className="row">
                                    <div className="col-3">
                                        <span><i className={`fab ${this.state.selectedItem.symbol}`}></i></span>

                                    </div>
                                    <div className="col-6">
                                        <span>{this.state.selectedItem.value}</span>

                                    </div>
                                    <div className="col-3">
                                        <span style={{ float: "right", marginRight: "1rem" }}><i style={{ right: "0" }} className="fas fa-chevron-down"></i></span>

                                    </div>
                                </div>
                            </div>
                            <div style={{ display: this.state.showItems ? "block" : "none" }} className="items">
                                {
                                    this.state.items.map(item => {
                                        return (

                                            <div
                                                key={item.id}
                                                onClick={() => { 
                                                    this.selectItem(item);
                                                    setCurrency(item.sym);
                                                 }}
                                                className={this.state.selectedItem === item ? "item selected" : "item"}>
                                                <div className="row">
                                                    <div className="col-3">
                                                        <span><i className={`fab ${item.symbol}`}> </i></span>
                                                    </div>
                                                    <div className="col-6">
                                                        {item.value}
                                                    </div>

                                                </div>
                                            </div>

                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                }}
            </SendConsumer>

        )
    }

    selectItem = (item) => {
        this.setState(() => {
            return {
                selectedItem: item,
                showItems: false
            }
        })
    }


    dropDown = () => {
        this.setState((prevState) => {
            return {
                showItems: !prevState.showItems
            }
        });


    }
}