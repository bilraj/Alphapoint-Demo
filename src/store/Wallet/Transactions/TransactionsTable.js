import React from 'react';
import "./transactionStyles.css";

export default function TransactionTable({ value }) {
    // alert(JSON.stringify(value, null, 4));
    const { transactions } = value;
    return (
        <div className="table-container">
            <div className="transaction-table-header">
                <span className="table-words">Transaction ID</span>
                <span className="table-words">Amount</span>
                <span className="table-words">Recipient</span>
                <span className="table-words">Description</span>
                <span className="table-words">Timestamp</span>
                <span className="table-words">Type</span>
            </div>

            <div>
                {
                    /* transaction {
    "Transaction id: [
        "amount" : ;
        "convertedVal: ";
        "currency: ";
        "toAddress: ";
        "description: ";
        "timestamp: ";
        "Type: (Could be buy/sell/store purchase)"
    ] " 
} */
                    transactions.map(transaction => {
                        {/* alert(JSON.stringify(transaction)) */}
                        return (
                            <div className="transaction-table-row-container" key={transaction.id}>
                                <span className="transaction-table-words"> {transaction.id}</span>
                                <span className="transaction-table-words"
                                    style={{ fontWeight:"800", color: transaction.flow === "red" ? "red" : "green" }}> ${transaction.amount}</span>
                                <span className="transaction-table-words"> {transaction.toAddress}</span>
                                <span className="transaction-table-words" id="transaction-table-row-description"> {transaction.description}</span>
                                <span className="transaction-table-words"> {transaction.date}</span>
                                <span className="transaction-table-words"> {transaction.type}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )

    // render() {

    //     return (
    //         <WalletConsumer>
    //             {(value) => {
    //                 const { balance } = value;
    //                 console.log("TOTAL BALANCE: " + balance)
    //                 const usd = parseFloat((balance[0] * 10601).toFixed(2)).toLocaleString(navigator.language, { minimumFractionDigits: 0 });
    //                 const adjusted = parseFloat((balance[0] * 1).toFixed(2));
    //                 return (
    //                     <div className="table-container">
    //                         <div className="table-header">
    //                             <div className="left-header">
    //                                 <span className="table-words">Total Balance</span>
    //                             </div>
    //                             <div className="right-header">
    //                                 <span className="table-words" id="total-balance-number">${usd}</span>
    //                             </div>
    //                         </div>

    //                         <div>
    //                             {
    //                                 this.state.currencies.map((item) => {
    //                                     console.log(item.logo);
    //                                     return (
    //                                         <div key={item.id} className="usd-pax">
    //                                             <div className="left-header">
    //                                                 <span><i className={item.logo}></i></span>
    //                                                 <span id="usd-pax" className="table-words">{item.name}</span>
    //                                             </div>
    //                                             <div className="right-header">
    //                                                 <span className="table-words" id="total-balance-number">${item.id === 0 ? usd : item.balance}</span>
    //                                                 <span id="pax">{item.id === 0 ? adjusted : item.balance} {item.name}</span>
    //                                             </div>
    //                                         </div>

    //                                     )
    //                                 })
    //                             }
    //                         </div>
    //                         Name: <input value={this.state.value} onChange={this.handleChange} type="text" placeholder="New currency" />
    //                         <button onClick={this.handleClick}>Add</button>
    //                     </div>
    //                 )
    //             }}
    //         </WalletConsumer>

    //     );
    // }
}
