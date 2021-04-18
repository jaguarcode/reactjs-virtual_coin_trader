import createReducers from '../api-redux-pack/createReducers';
import notification from './notificationReducer';
import searchFilter from './searchFilterReducer';

const apiReducers = createReducers('transactions');
export default {
  ...apiReducers,
  notification,
  searchFilter,
};
