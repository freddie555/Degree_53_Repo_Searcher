import React from 'react';

export default (props) => {
  return (
    <ul>
      <li><i className='fa fa-book fa-fw'></i> Name: {props.repo.name}</li>
      <li><i className='fa fa-user fa-fw'></i> html url: {props.repo.html_url}</li>
      <li><i className='fa fa-phone fa-fw'></i> Merges url: {props.repo.merges_url}</li>
    </ul>
  );
};
