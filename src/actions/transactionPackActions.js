import createActions from '../api-redux-pack/createActions';

export const FETCH_TRANSACTION_LIST = 'transaction/FETCH_TRANSACTION_LIST';
export const FETCH_TRANSACTION = 'transaction/FETCH_TRANSACTION';
export const UPDATE_TRANSACTION = 'transaction/UPDATE_TRANSACTION';
export const CREATE_TRANSACTION = 'transaction/CREATE_TRANSACTION';

const { collection, create, reset } = createActions('transactions');
const PAGE_SIZE = 10;

export const resetTransactionList = reset;

export function requestTransactionList(params, _page = 1) {
  const meta = {
    pageNumber: _page,
    pageSize: PAGE_SIZE,
    notification: {
      success: 'Update Trading Status Success.',
      error: 'An Error Occured While Updating Trading Status.',
    },
  };

  return collection(
    {
      ...params,
      _page,
      _limit: PAGE_SIZE,
    },
    meta,
  );
}

export function createTransaction(data, onComplete) {
  const meta = {
    onSuccess: onComplete,
    notification: {
      success: 'A Trading Completed Successfully.',
    },
  };
  return create(data, {}, meta);
}
