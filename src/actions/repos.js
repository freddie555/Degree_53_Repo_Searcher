import request from 'superagent';

import * as types from './types';

export function searchRepos (searchParam) {
  return (dispatch) => {
    dispatch({type: types.SEARCH_REPOS_REQUEST});
    request
      .get(`https://api.github.com/search/repositories?q=${searchParam}`)
      .end((err, res) => {
        if (err) return dispatch({type: types.SEARCH_REPOS_ERROR});
        dispatch({type: types.SEARCH_REPOS_SUCCESS, data: res});
      });
  };
}
