import React from 'react';
const moment = require('moment');

export default (props) => {
  return (
    <ul>
      <p className='detail-name'>{props.repo.name}</p>
      <li><i></i> Owner: {props.repo.owner.login}</li>
      <li><i></i> Created: {moment(props.repo.created_at).format('MMM Do YY')}</li>
      <li><i></i> Forks: {props.repo.forks_count}</li>
      <li><i></i> Open issues: {props.repo.open_issues_count}</li>
      <li><i></i> Language: {props.repo.language}</li>
      <li><i></i> Homepage: {props.repo.homepage}</li>
      <li><i></i> Description: {props.repo.description}</li>
    </ul>

  );
};
