import createSelectors from '../api-redux-pack/createSelectors';

export const {
  resourceSelector: transactionsSelector,
  entitiesSelector: transactionEntitiesSelector,
  pagesSelector: transactionPagesSelector,
  collectionSelector: transactionListSelector,
  collectionLoadingStateSelector: transactionListLoadingStateSelector,
  createLoadingStateSelector: transactionCreateLoadingStateSelector,
  paginationSelector,
} = createSelectors('transactions');
