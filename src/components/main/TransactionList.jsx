import React, { PureComponent } from 'react';
// import axios from 'axios';
import Api from '../../Api';

import Heading from '../../ui/Heading';
import Card from '../../ui/Card';

import TransactionSearchFilter from './TransactionSearchFilter';
import TransactionTable from './TransactionTable';

class TransactionList extends PureComponent {
  state = {
    transactions: [],
  };

  componentDidMount() {
    Api.get('transactions/').then((response) =>
      this.setState({
        transactions: response.data,
      }),
    );
  }

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
