import { connect } from 'react-redux';
import TransactionPagination from '../../components/main/TransactionPagination';
import {
  requestTransactionList,
  FETCH_TRANSACTION_LIST,
} from '../../actions/transactionPackActions';

const mapStateToProps = (state) => {
  const { pagination, loadingState, ids } = state.transactions;
  const loading = loadingState[FETCH_TRANSACTION_LIST];
  const { number, size } = pagination;
  return {
    searchParams: state.searchFilter.params,
    pageNumber: number || 1,
    hasNext: ids.length === size,
    loading,
  };
};

const mapDispatchToProps = {
  requestTransactionList,
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionPagination);
