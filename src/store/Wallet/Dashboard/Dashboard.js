import React, { Component } from 'react';
import Menu from '../Menu';
import Top from '../Top';
import Table from './Table';
import 'react-table/react-table.css';
import { WalletConsumer } from '../../../WalletContext';
import './styles.css';
import BuyTable from './BuyTable';
import { TokenConsumer } from '../../../TokenContext';


export default class Dashboard extends Component {
  render() {
    return (
      <WalletConsumer>
        {(value) => {
          console.log("Walets value " + value.balances[0])
          return (
            // state = {
            //     token: {
            //         id: 1021,
            //         name: "",
            //         symbol: "",
            //         decimals: 0,
            //         date: "",
            //         companyName: "",
            //         issuanceType: "",
            //         country: ""
            //     },
            //     balance: 0,
            //     haveToken: false,
            // }

            <TokenConsumer>
              {(val) => {
                return (
                  <div className="cont">
                    <Menu />
                    <div className="container-fluid" id="top-balance" >
                      <Top />
                      <div style={{ display: "flex", flexDirection: "row", height: "auto", width: "100%" }}>
                        <Table value={value} />
                        <BuyTable addNewCurrency={value.addNewCurrency} value={val} />
                      </div>

                    </div>

                  </div>
                )
              }}
            </TokenConsumer>

          )
        }}
      </WalletConsumer>


    );
  }
}
