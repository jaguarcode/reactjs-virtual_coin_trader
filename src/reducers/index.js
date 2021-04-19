import createReducers from '../api-redux-pack/createReducers';
import notification from './notificationReducer';
import searchFilter from './searchFilterReducer';
import router from './routerReducer';

const apiReducers = createReducers('transactions', 'users');
export default {
  ...apiReducers,
  notification,
  searchFilter,
  router,
};
