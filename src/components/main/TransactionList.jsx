import React, { PureComponent } from 'react';
import Api from '../../Api';

import Heading from '../../ui/Heading';
import Card from '../../ui/Card';

import TransactionTable from './TransactionTable';
import TransactionSearchFilterContainer from '../../containers/main/TransactionSearchFilterContainer';

class TransactionList extends PureComponent {
  componentDidMount() {
    Api.get('transactions/').then(({ data }) => this.props.setTransactionList(data));
  }

  render() {
    const { transactions } = this.props;
    return (
      <div>
        <Heading level={3}>Trading Status</Heading>
        <Card vertical={4} horizontal={4}>
          <TransactionSearchFilterContainer />
        </Card>
        <Card>
          <TransactionTable transactions={transactions} />
        </Card>
      </div>
    );
  }
}

TransactionList.defaultProps = {
  transactions: [],
  setTransactionList: () => {},
};

export default TransactionList;
