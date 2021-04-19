import createActions from '../api-redux-pack/createActions';

const { create } = createActions('users');

export function createUser(data, onComplete) {
  return create(
    data,
    {},
    {
      notification: { success: 'User Registration Success.' },
      onSuccess: onComplete,
    },
  );
}
