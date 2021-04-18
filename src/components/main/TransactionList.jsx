import React, { PureComponent } from 'react';

import Heading from '../../ui/Heading';
import Card from '../../ui/Card';

import TransactionTable from './TransactionTable';
import TransactionSearchFilterContainer from '../../containers/main/TransactionSearchFilterContainer';

import TransactionPaginationContainer from '../../containers/main/TransactionPaginationContainer';

class TransactionList extends PureComponent {
  componentDidMount() {
    this.props.requestTransactionList();
  }

  render() {
    const { transactions, loadingState } = this.props;
    return (
      <div>
        <Heading level={3}>Trading Status</Heading>
        <Card vertical={4} horizontal={4}>
          <TransactionSearchFilterContainer />
        </Card>
        <Card>
          <TransactionTable transactions={transactions} isLoading={loadingState} />
        </Card>
        <TransactionPaginationContainer />
      </div>
    );
  }
}

TransactionList.defaultProps = {
  transactions: [],
  requestTransactionList: () => {},
};

export default TransactionList;
