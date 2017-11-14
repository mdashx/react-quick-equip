import React from 'react';

import ListUser from 'components/ListUser';

const UserList = (props) => {
  if (props.usernames !== undefined) {
    return props.usernames.map(username => (
      <ListUser
          username={username}
          key={`listuser-${username}`}
          clickHandler={props.clickHandler}
      /> 
    ));  
  } else {
    return <span></span>;
  }
}

export default UserList;
