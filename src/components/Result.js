import React from 'react';

export default (props) => {
  return (
    <a className="panel-block is-active" onClick={props.onClick}>
      <span className="panel-icon">
        <i className="fa fa-book"></i>
      </span>
      <div className="result">
        <img className="result-img" src={props.repo.owner.avatar_url} height="50px"/>
      <div className="result-text">
        <p className={"result-name"}>
          {props.repo.name}
        </p>
        <div className="result-details">
          <p>
            <small>
            created by {props.repo.owner.login}
            </small>
          </p>
          <p>
            <small>
            on {props.repo.created_at}
          </small>
        </p>
      </div>
    </div>
    </div>
    </a>
  );
};
