import React from 'react';

import ListUser from 'components/ListUser';

const UserList = (props) => {
  return props.usernames.map(username => (
    <ListUser
        username={username}
        key={`listuser-${username}`}
        clickHandler={props.clickHandler}
    /> 
  ));
}

export default UserList;
