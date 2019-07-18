import React, { Component } from 'react';
import ReactTable from 'react-table';

export class BalanceReactTable extends Component {
    render() {
        const data = [{
            name: 'Tanner Linsley',
            age: 26,
            friend: {
                name: 'Jason Maurer',
                age: 23,
            }
        }];
        const cols = [{
            Header: 'Wallet',
            accessor: 'wallet' // String-based value accessors!
        }, {
            Header: 'Balance(BTC)',
            accessor: 'balance',
            Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
        }, {
            id: 'friendName', // Required because our accessor is not a string
            Header: 'Friend Name',
            accessor: d => d.friend.name // Custom value accessors!
        }, {
            Header: props => <span>Friend Age</span>, // Custom header components!
            accessor: 'friend.age'
        }]

        return <ReactTable
            style={{width: "50%"}}
            data={data}
            columns={cols}
            pageSize={2}
            showPaginationBottom = {false}
            showPageSizeOptions =  {false}
            
        />

    }
}