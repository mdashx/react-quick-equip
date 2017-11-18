import React from 'react';

const ListUser = props => (
  <li
    onClick={props.clickHandler}
    style={{ cursor: 'pointer' }}
    data-username={props.username}
  >
    {props.username}
  </li>
);

export default ListUser;
