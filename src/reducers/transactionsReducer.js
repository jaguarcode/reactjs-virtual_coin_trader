import { handle } from 'redux-pack';
import { FETCH_TRANSACTION_LIST } from '../actions/transactionPackActions';

const initState = {
  ids: [],
  entities: {},
  loading: false,
  hasError: false,
  pagination: {},
};

export default (state = initState, action) => {
  const { type, payload, meta } = action;

  switch (type) {
    case FETCH_TRANSACTION_LIST: {
      return handle(state, action, {
        start: (prevState) => ({
          ...prevState,
          loading: true,
          hasError: false,
        }),
        success: (prevState) => {
          const { data } = payload;
          const { pageNumber, pageSize } = meta || {};
          const ids = data.map((entity) => entity['id']);
          const entities = data.reduce(
            (finalEntities, entity) => ({
              ...finalEntities,
              [entity['id']]: entity,
            }),
            {},
          );
          return {
            ...prevState,
            ids,
            entities,
            loading: false,
            hasError: false,
            pagination: {
              number: pageNumber,
              size: pageSize,
            },
          };
        },
        failure: (prevState) => {
          const { errorMessage } = payload.response.data;
          return {
            ...prevState,
            loading: false,
            hasError: true,
            errorMessage,
          };
        },
      });
    }
    default:
      return state;
  }
};
