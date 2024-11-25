import React, { useState } from 'react';
import { useUser } from '../hooks/useUser';

function UserList() {
  const { users, addUser, deleteUser } = useUser();

  return (
    <div>
      <button onClick={addUser}>Add User</button>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.role}
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
