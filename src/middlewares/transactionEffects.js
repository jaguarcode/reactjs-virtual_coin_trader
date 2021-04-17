import { TRADE_COMPLETE, requestTransactionList } from '../actions/transactionActions';
import { showMessage } from '../actions/notificationActions';

export default (store) => (nextRunner) => (action) => {
  const { type, payload } = action;
  const result = nextRunner(action);
  if (type == TRADE_COMPLETE) {
    const message = 'Trading Status has been updated.';
    store.dispatch(showMessage(message));
    store.dispatch(requestTransactionList());
  }
  return result;
};
