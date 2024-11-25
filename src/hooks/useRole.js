import { useState } from 'react';

export function useRole() {
  const [roles, setRoles] = useState([
    { id: 1, name: 'Admin', permissions: ['Read', 'Write', 'Delete'] },
    { id: 2, name: 'Editor', permissions: ['Read', 'Write'] },
  ]);

  const addRole = () => {
    const newRole = { id: Date.now(), name: 'New Role', permissions: ['Read'] };
    setRoles([...roles, newRole]);
  };

  const deleteRole = (id) => {
    setRoles(roles.filter(role => role.id !== id));
  };

  return { roles, addRole, deleteRole };
}
