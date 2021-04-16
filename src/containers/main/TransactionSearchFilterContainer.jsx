import { connect } from 'react-redux';
import { setTransactionList } from '../../actions/transactionActions';
import TransactionSearchFilter from '../../components/main/TransactionSearchFilter';

export default connect(null, { setTransactionList })(TransactionSearchFilter);
