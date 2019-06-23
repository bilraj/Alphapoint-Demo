import React, { Component } from 'react';
import Menu from '../Menu';
import Top from '../Top';
import Table from './Table';
import 'react-table/react-table.css';
import { BalanceReactTable } from './ReactTable';


export default class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="cont">
          <div style={{ height: "100%" }} className="d-flex flex-direction-column">
            <Menu />
            <div className="container-fluid" id="top-balance" >
              <Top />
              <Table style={{backgroundColor:"green", width:"100px", height:"100px"}} />
              
            </div>
          </div>

        </div>

      </React.Fragment >

    );
  }
}
