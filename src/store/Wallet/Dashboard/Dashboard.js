import React, { Component } from 'react';
import Menu from '../Menu';
import Top from '../Top';
import Table from './Table';
import 'react-table/react-table.css';
import { WalletConsumer } from '../../../WalletContext';
import './styles.css';


export default class Dashboard extends Component {
  render() {
    return (
      <WalletConsumer>
        {(value) => {
          console.log("Walets valueL " + value.balance[0])
          return (
            <div className="cont">
                <Menu />
                <div className="container-fluid" id="top-balance" >
                  <Top />
                  <Table value={value}  />

                </div>

            </div>
          )
        }}
      </WalletConsumer>


    );
  }
}
