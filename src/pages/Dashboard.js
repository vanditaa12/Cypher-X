import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="hero-section">
        <div className="hero-content">
          <h1>See it. Secure it.</h1>
          <p>
            Comprehensive security visibility and continuous compliance for your
            public cloud infrastructure.
          </p>
          <div className="buttons">
          <a href="https://www.example.com/cybersecurity-article" target="_blank" rel="noopener noreferrer">
              <button className="primary-button">Read More</button>
            </a>
          </div>
        </div>
      </div>
      <div className="info-section">
        <h2>Battle-tested with leading enterprises globally</h2>
        <p>
          Cloud & security innovators like Xero and Centrify, plus more than
          100 others – from the Fortune 500 to high-growth startups – rely on
          our platform to protect critical infrastructure & eliminate blind
          spots in their cloud deployments.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;


// import React from "react";
// import { FaUsers, FaUserShield, FaKey } from "react-icons/fa";
// import "./Dashboard.css";

// const Dashboard = () => {
//   return (
//     <div className="dashboard">
//       <h2>Welcome to the Admin Dashboard</h2>
//       <div className="dashboard-cards">
//         <div className="card">
//           <FaUsers size={50} />
//           <h3>User Management</h3>
//           <p>Manage all users effectively.</p>
//         </div>
//         <div className="card">
//           <FaUserShield size={50} />
//           <h3>Role Management</h3>
//           <p>Assign and modify roles.</p>
//         </div>
//         <div className="card">
//           <FaKey size={50} />
//           <h3>Permission Management</h3>
//           <p>Control access with permissions.</p>
//         </div>
//       </div>
//       <div className="read-more">
//         <a
//           href="https://www.cybersecurityguide.org/insights/corporate-cybersecurity/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="read-more-button"
//         >
//           Read More
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
