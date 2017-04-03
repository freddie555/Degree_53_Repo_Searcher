import React from 'react';

export default (props) => {
  const isActive = props.repo ? 'modal is-active' : 'modal';
  return (
    <ul>
      <li><i></i> Forks: {props.repo.forks_count}</li>
      <li><i></i> Open issues: {props.repo.open_issues_count}</li>
      <li><i></i> Merges url: {props.repo.merges_url}</li>
      <li><i></i> Homepage: {props.repo.homepage}</li>
      <li><i></i> Language: {props.repo.language}</li>
    </ul>

  );
};
