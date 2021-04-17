import { connect } from 'react-redux';
import { requestTransactionList } from '../../actions/transactionPackActions';
import TransactionSearchFilter from '../../components/main/TransactionSearchFilter';

export default connect(null, { requestTransactionList })(TransactionSearchFilter);
