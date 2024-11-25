import React, { useState } from "react";
import { FaUserPlus, FaEdit, FaTrashAlt } from "react-icons/fa";
import "./UserManagement.css"; // Add styles in this file

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john.doe@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com", role: "User" },
    { id: 3, name: "Sam Wilson", email: "sam.wilson@example.com", role: "Manager" },
  ]);
  
  // State for modal visibility and user data
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    role: "User",
  });

  // Handle opening and closing of the add user modal
  const handleAddUser = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setNewUser({ name: "", email: "", role: "User" }); // Reset form
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  // Handle adding new user
  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, { ...newUser, id: users.length + 1 }]); // Add user with a unique ID
    handleCloseModal(); // Close modal after submitting
  };

  // Handle edit user (for now just alerts)
  const handleEditUser = (id) => {
    alert(`Edit user with id ${id}`);
  };

  // Handle delete user (for now just alerts)
  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="user-management">
      <h2>User Management</h2>
      <button className="btn-add-user" onClick={handleAddUser}>
        <FaUserPlus size={20} /> Add New User
      </button>
      <div className="user-list">
        {users.map((user) => (
          <div className="user-card" key={user.id}>
            <div className="user-info">
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <p className="role">Role: {user.role}</p>
            </div>
            <div className="user-actions">
              <button
                className="btn-edit"
                onClick={() => handleEditUser(user.id)}
              >
                <FaEdit size={20} /> Edit
              </button>
              <button
                className="btn-delete"
                onClick={() => handleDeleteUser(user.id)}
              >
                <FaTrashAlt size={20} /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add User Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Add New User</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={newUser.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={newUser.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Role:</label>
                <select
                  name="role"
                  value={newUser.role}
                  onChange={handleInputChange}
                >
                  <option value="Admin">Admin</option>
                  <option value="Manager">Manager</option>
                  <option value="User">User</option>
                </select>
              </div>
              <div className="modal-actions">
                <button type="submit" className="btn-submit">
                  Add User
                </button>
                <button
                  type="button"
                  className="btn-cancel"
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
