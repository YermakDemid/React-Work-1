import React from 'react';
import styles from './transaction-history.module.scss'

export default function TransactionHistory({className = 'transaction-history', items }) {
  return (
    <table className={`${styles[`${className}`]}`}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
          {items.map(item => (
            <tr>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          ))}
      </tbody>
    </table>
  )
};
