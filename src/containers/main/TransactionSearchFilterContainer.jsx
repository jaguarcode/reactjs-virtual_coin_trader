import { connect } from 'react-redux';
import { requestTransactionList } from '../../actions/transactionPackActions';
import TransactionSearchFilter from '../../components/main/TransactionSearchFilter';
import { setFilter } from '../../actions/searchFilterActions';

export default connect(null, { requestTransactionList, setFilter })(TransactionSearchFilter);
