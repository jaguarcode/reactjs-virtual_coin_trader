import React, { PureComponent } from 'react';

import Heading from '../../ui/Heading';
import Card from '../../ui/Card';

import TransactionSearchFilter from './TransactionSearchFilter';
import TransactionTable from './TransactionTable';

class TransactionList extends PureComponent {
  state = {
    transactions: [
      {
        id: 'vc1',
        name: 'Virtual Coin #1 (VC1)',
        totalPrice: '$1,000',
        currentPrice: '$100',
        datetime: '2021/04/16 17:00:00',
      },
    ],
  };

  render() {
    const { transactions } = this.state;
    return (
      <div>
        <Heading level={3}>Trading Status</Heading>
        <Card vertical={4} horizontal={4}>
          <TransactionSearchFilter />
        </Card>
        <Card>
          <TransactionTable transactions={transactions} />
        </Card>
      </div>
    );
  }
}

export default TransactionList;
