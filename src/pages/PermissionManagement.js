import React, { useState } from "react";
import { FaUserShield, FaEdit, FaEye } from "react-icons/fa"; // Import role icons
import './PermissionManagement.css';

const PermissionManagement = () => {
  const [permissions, setPermissions] = useState([]);
  const [newPermission, setNewPermission] = useState("");

  const handleAddPermission = () => {
    if (newPermission.trim()) {
      setPermissions([...permissions, newPermission]);
      setNewPermission(""); // Clear the input field after adding permission
    }
  };

  return (
    <div className="permission-management">
      <h2>Permission Management</h2>

      {/* Form to Add New Permission */}
      <div className="add-permission-form">
        <input
          type="text"
          value={newPermission}
          onChange={(e) => setNewPermission(e.target.value)}
          placeholder="Enter new permission"
        />
        <button onClick={handleAddPermission}>Add New Permission</button>
      </div>

      {/* Display Existing Permissions */}
      <div className="permissions-list">
        <h3>Existing Permissions</h3>
        <div className="roles-container">
          {permissions.map((permission, index) => (
            <div className="role-box" key={index}>
              <div className="role-icon">
                <FaUserShield size={30} />
              </div>
              <p>{permission}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Display the Existing Roles */}
      <div className="existing-roles">
        <h3>Existing Roles</h3>
        <div className="roles-container">
          <div className="role-box">
            <div className="role-icon">
              <FaUserShield size={30} />
            </div>
            <p>Admin</p>
          </div>
          <div className="role-box">
            <div className="role-icon">
              <FaEdit size={30} />
            </div>
            <p>Editor</p>
          </div>
          <div className="role-box">
            <div className="role-icon">
              <FaEye size={30} />
            </div>
            <p>Viewer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PermissionManagement;
