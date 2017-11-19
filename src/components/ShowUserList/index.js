import React from 'react';

import UserList from 'components/UserList';

const ShowUserList = props => (
  <div>
    <h1 className={props.headerClass}>{props.title}</h1>
    <br />
    <ul>
      <UserList usernames={props.usernames} clickHandler={props.clickHandler} />
    </ul>
  </div>
);

export default ShowUserList;
