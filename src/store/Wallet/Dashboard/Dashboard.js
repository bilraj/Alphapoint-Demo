import React, { Component } from 'react';
import Menu from '../Menu';
import Top from '../Top';
import Table from './Table';
import 'react-table/react-table.css';
import { WalletConsumer } from '../../../WalletContext';


export default class Dashboard extends Component {
  render() {
    return (
      <WalletConsumer>
        {(value) => {
          console.log("Walets valueL " + value.balance[0])
          return (
            <div className="cont">
              <div style={{ height: "100%" }} className="d-flex flex-direction-column">
                <Menu />
                <div className="container-fluid" id="top-balance" >
                  <Top />
                  <Table value={value} style={{ backgroundColor: "green", width: "100px", height: "100px" }} />

                </div>
              </div>

            </div>
          )
        }}
      </WalletConsumer>


    );
  }
}
