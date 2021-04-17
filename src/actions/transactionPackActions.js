import Api from '../Api';

export const FETCH_TRANSACTION_LIST = 'transaction/FETCH_TRANSACTION_LIST';
export const CREATE_TRANSACTION = 'transaction/CREATE_TRANSACTION';

const PAGE_SIZE = 10;

export function requestTransactionList(params, _page = 1) {
  return {
    type: FETCH_TRANSACTION_LIST,
    promise: Api.get('transactions/', {
      params: {
        ...params,
        _page,
        _limit: PAGE_SIZE,
      },
    }),
    meta: {
      pageNumber: _page,
      pageSize: PAGE_SIZE,
      notification: {
        success: 'Update Trading Status Success.',
        error: 'An Error Occured While Updating Trading Status.',
      },
    },
  };
}

export function createTransaction(data, onComplete) {
  return {
    type: CREATE_TRANSACTION,
    promise: Api.post('transactions/', data),
    meta: {
      onSuccess: onComplete,
      notification: {
        success: 'A Trading Completed Successfully.',
      },
    },
  };
}
