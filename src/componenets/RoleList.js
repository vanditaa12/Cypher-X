import React, { useState } from 'react';
import { useRole } from '../hooks/useRole';

function RoleList() {
  const { roles, addRole, deleteRole } = useRole();

  return (
    <div>
      <button onClick={addRole}>Add Role</button>
      <ul>
        {roles.map(role => (
          <li key={role.id}>
            {role.name} - {role.permissions.join(', ')}
            <button onClick={() => deleteRole(role.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RoleList;
