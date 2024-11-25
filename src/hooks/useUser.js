import { useState } from 'react';

export function useUser() {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', role: 'Admin' },
    { id: 2, name: 'Jane Smith', role: 'Editor' },
  ]);

  const addUser = () => {
    const newUser = { id: Date.now(), name: 'New User', role: 'Viewer' };
    setUsers([...users, newUser]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return { users, addUser, deleteUser };
}
