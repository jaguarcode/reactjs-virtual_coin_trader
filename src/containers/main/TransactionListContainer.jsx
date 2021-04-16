import { connect } from 'react-redux';
import TransactionList from '../../components/main/TransactionList';
import { setTransactionList } from '../../actions/transactionActions';

/**
 * 데이터 컴포넌트
 */
const mapStateToProps = (state) => {
  const { ids, entities } = state.transactions;
  const transactions = ids.map((id) => entities[id]);

  return { transactions };
};

const mapDispatchToProps = {
  setTransactionList,
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);
