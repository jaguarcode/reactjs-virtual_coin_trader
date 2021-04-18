import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Table from '../../ui/Table';
import TableRow from '../../ui/TableRow';
import TableCell from '../../ui/TableCell';
import TableHead from '../../ui/TableHead';
import TableBody from '../../ui/TableBody';
import Text from '../../ui/Text';
import Spacing from '../../ui/Spacing';
import withLoading from '../../ui/withLoading';

const LoadingMessage = (
  <Spacing vertical={4} horizontal={2}>
    <Text large>loading data...</Text>
  </Spacing>
);

class TransactionTable extends PureComponent {
  render() {
    const { transactions } = this.props;
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left">Coin</TableCell>
            <TableCell align="center">Market Capitalization</TableCell>
            <TableCell align="center">Market Price</TableCell>
            <TableCell align="right">Trading Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map(({ id, name, totalPrice, currentPrice, datetime }) => (
            <TableRow key={id}>
              <TableCell>{name}</TableCell>
              <TableCell align="center">{totalPrice}</TableCell>
              <TableCell align="center">{currentPrice}</TableCell>
              <TableCell align="right">{datetime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}

TransactionTable.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      totalPrice: PropTypes.number,
      currentPrice: PropTypes.number,
      datetime: PropTypes.string,
    }),
  ),
};

export default withLoading(LoadingMessage)(TransactionTable);
