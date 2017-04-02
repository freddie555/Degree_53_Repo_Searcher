import React from 'react';

export default (props) => {
  const classes = props.selected ? 'bold' : '';
  console.log('in profile');
  return (
    <li onClick={props.onClick} className={classes}>
      <i className='fa fa-user'></i> {props.repo.name} created by {props.repo.owner.login}
    </li>
  );
};
