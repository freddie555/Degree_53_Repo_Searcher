import React from 'react';

export default (props) => {
  return (
    <a className="panel-block is-active" onClick={props.onClick}>
      <span className="panel-icon">
        <i className="fa fa-book"></i>
      </span>
      {props.repo.name} created by {props.repo.owner.login} at {props.repo.created_at}
    </a>
  );
};
