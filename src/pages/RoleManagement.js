import React, { useState } from "react";
import { FaShieldAlt, FaPlusCircle, FaUserShield, FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import "./RoleManagement.css"; // Add styles in this file

const RoleManagement = () => {
  const [roles, setRoles] = useState([
    { name: "Admin", description: "Has full access to all resources", icon: <FaUserShield size={30} /> },
    { name: "Editor", description: "Can edit content but not manage users", icon: <FaEdit size={30} /> },
    { name: "Viewer", description: "Can only view content", icon: <FaEye size={30} /> },
  ]);
  const [newRole, setNewRole] = useState("");
  const [roleDesc, setRoleDesc] = useState("");

  // Handle adding a new role
  const handleAddRole = () => {
    if (newRole && roleDesc) {
      // Add new role to the list
      setRoles([...roles, { name: newRole, description: roleDesc, icon: <FaShieldAlt size={30} /> }]);
      setNewRole(""); // Clear input fields
      setRoleDesc("");
    }
  };

  // Handle deleting a role
  const handleDeleteRole = (roleName) => {
    // Filter out the role to delete
    setRoles(roles.filter(role => role.name !== roleName));
  };

  return (
    <div className="role-management">
      <h2 className="page-title">
        <FaShieldAlt size={30} style={{ marginRight: "10px" }} />
        Role Management
      </h2>
      <div className="role-list">
        <h3>Existing Roles</h3>
        <div className="role-cards">
          {roles.map((role, index) => (
            <div key={index} className="role-card">
              <div className="role-icon">{role.icon}</div>
              <h4>{role.name}</h4>
              <p>{role.description}</p>
              <button className="delete-button" onClick={() => handleDeleteRole(role.name)}>
                <FaTrashAlt size={20} style={{ marginRight: "5px" }} />
                Delete Role
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="add-role">
        <h3>Add New Role</h3>
        <div className="input-group">
          <input
            type="text"
            placeholder="Role Name"
            value={newRole}
            onChange={(e) => setNewRole(e.target.value)}
          />
          <textarea
            placeholder="Role Description"
            value={roleDesc}
            onChange={(e) => setRoleDesc(e.target.value)}
          />
        </div>
        <button className="add-button" onClick={handleAddRole}>
          <FaPlusCircle size={20} style={{ marginRight: "5px" }} />
          Add Role
        </button>
      </div>
    </div>
  );
};

export default RoleManagement;
