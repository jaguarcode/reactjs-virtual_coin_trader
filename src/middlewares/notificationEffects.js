import { KEY, LIFECYCLE } from 'redux-pack';
import { SHOW_NOTIFICATION, showMessage, hideMessage } from '../actions/notificationActions';
import { debounce } from '../middlewares/debounce';

const debounceRunner = debounce((action) => action(), 2000);

export default (store) => (nextRunner) => (action) => {
  const { type, meta } = action;
  const result = nextRunner(action);
  if (meta && meta.notification) {
    const { success, error } = meta.notification;
    if (success && meta[KEY.LIFECYCLE] === LIFECYCLE.SUCCESS) {
      store.dispatch(showMessage(success));
    } else if (error && meta[KEY.LIFECYCLE] === LIFECYCLE.FAILURE) {
      store.dispatch(showMessage(error, true));
    }
  } else if (type === SHOW_NOTIFICATION) {
    const hide = () => store.dispatch(hideMessage());
    setTimeout(hide, 2000);
    debounceRunner(hide);
  }
  return result;
};
