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
            <button className="primary-button">Read More</button>
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
