import React from 'react';

export default (props) => {
  return (
    <ul>
      <li><i className='fa fa-book fa-fw'></i> Forks: {props.repo.forks_count}</li>
      <li><i className='fa fa-user fa-fw'></i> Open issues: {props.repo.open_issues_count}</li>
      <li><i className='fa fa-phone fa-fw'></i> Merges url: {props.repo.merges_url}</li>
    </ul>
  );
};
