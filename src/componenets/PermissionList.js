import React from 'react';

function PermissionList() {
  const permissions = ['Read', 'Write', 'Delete'];

  return (
    <div>
      <ul>
        {permissions.map(permission => (
          <li key={permission}>{permission}</li>
        ))}
      </ul>
    </div>
  );
}

export default PermissionList;
