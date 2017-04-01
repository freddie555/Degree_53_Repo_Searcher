import * as types from '../actions/types';

const initialState = {
  loading: false,
  error: null,
  repoResults: []
};

export default (prevState = initialState, action) => {
  const newState = Object.assign({}, prevState);
  switch (action.type) {
    case types.SEARCH_REPOS_REQUEST:
      newState.loading = true;
      break;

    case types.SEARCH_REPOS_ERROR:
      newState.loading = false;
      newState.error = action.error;
      break;

    case types.SEARCH_REPOS_SUCCESS:
      newState.loading = false;
      newState.repoResults = action.data.body.items;
      break;

    default: return newState;
  }
  return newState;
};
