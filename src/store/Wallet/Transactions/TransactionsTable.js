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
}
