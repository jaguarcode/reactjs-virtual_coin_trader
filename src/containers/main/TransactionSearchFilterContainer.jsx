import { connect } from 'react-redux';
import { setFilter } from '../../actions/searchFilterActions';
import TransactionSearchFilter from '../../components/main/TransactionSearchFilter';

const mapStateToProps = (state) => ({
  initValues: state.searchFilter.params,
});

export default connect(mapStateToProps, { setFilter })(TransactionSearchFilter);
