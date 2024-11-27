// import React from 'react';
// //import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Dashboard from './pages/Dashboard';
// import UserManagement from './pages/UserManagement';
// import RoleManagement from './pages/RoleManagement';
// import PermissionManagement from './pages/PermissionManagement';
// import LoginSignup from "./pages/LoginSignup";
// import Header from './componenets/Header';
// import './App.css';


// function App() {
//   return (
//     <Router>
//       <div className="app-container">
//         <Header />
//         <div className="main-content">
//           <Routes>
//           <Route path="/login" element={<LoginSignup />} />
//             <Route path="/" element={<Dashboard />} />
//             <Route path="/users" element={<UserManagement />} />
//             <Route path="/roles" element={<RoleManagement />} />
//             <Route path="/permissions" element={<PermissionManagement />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Dashboard from "./pages/Dashboard";
// import UserManagement from "./pages/UserManagement";
// import RoleManagement from "./pages/RoleManagement";
// import PermissionManagement from "./pages/PermissionManagement";
// import LoginSignup from "./pages/LoginSignup";
// import Header from './componenets/Header';
// import "./App.css";

// // Authentication Guard for Private Routes
// const PrivateRoute = ({ children }) => {
//   const isAuthenticated = localStorage.getItem("username"); // Check for logged-in user
//   return isAuthenticated ? children : <Navigate to="/login" />;
// };

// function App() {
//   return (
//     <Router>
//       <div className="app-container">
//         {/* Show Header only for authenticated users */}
//         {localStorage.getItem("username") && <Header />}
//         <div className="main-content">
//           <Routes>
//             {/* Login/Signup Route */}
//             <Route path="/login" element={<LoginSignup />} />

//             {/* Protected Routes */}
//             <Route
//               path="/"
//               element={
//                 <PrivateRoute>
//                   <Dashboard />
//                 </PrivateRoute>
//               }
//             />
//             <Route
//               path="/users"
//               element={
//                 <PrivateRoute>
//                   <UserManagement />
//                 </PrivateRoute>
//               }
//             />
//             <Route
//               path="/roles"
//               element={
//                 <PrivateRoute>
//                   <RoleManagement />
//                 </PrivateRoute>
//               }
//             />
//             <Route
//               path="/permissions"
//               element={
//                 <PrivateRoute>
//                   <PermissionManagement />
//                 </PrivateRoute>
//               }
//             />

//             {/* Fallback for Invalid Routes */}
//             <Route path="*" element={<Navigate to="/login" />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;


// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Dashboard from "./pages/Dashboard";
// import UserManagement from "./pages/UserManagement";
// import RoleManagement from "./pages/RoleManagement";
// import PermissionManagement from "./pages/PermissionManagement";
// import LoginSignup from "./pages/LoginSignup";
// import Header from './componenets/Header';
// import "./App.css";

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const handleLogin = () => {
//     setIsAuthenticated(true); // Mark as logged in
//   };

//   const ProtectedRoute = ({ element }) => {
//     return isAuthenticated ? element : <Navigate to="/login" />;
//   };

//   return (
//     <Router>
//       <div className="app-container">
//         {isAuthenticated && <Header />}
//         <div className="main-content">
//           <Routes>
//             <Route path="/login" element={<LoginSignup onLogin={handleLogin} />} />
//             <Route path="/" element={<ProtectedRoute element={<Dashboard />} />} />
//             <Route path="/users" element={<ProtectedRoute element={<UserManagement />} />} />
//             <Route path="/roles" element={<ProtectedRoute element={<RoleManagement />} />} />
//             <Route path="/permissions" element={<ProtectedRoute element={<PermissionManagement />} />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;


// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Dashboard from "./pages/Dashboard";
// import UserManagement from "./pages/UserManagement";
// import RoleManagement from "./pages/RoleManagement";
// import PermissionManagement from "./pages/PermissionManagement";
// import LoginSignup from "./pages/LoginSignup";
// import Header from "./componenets/Header";
// import "./App.css";

// function App() {
//   // State for authentication
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   // Handle login callback
//   const handleLogin = () => {
//     setIsAuthenticated(true); // Mark the user as logged in
//   };

//   // Higher-order component for protecting routes
//   const ProtectedRoute = ({ children }) => {
//     return isAuthenticated ? children : <Navigate to="/login" replace />;
//   };

//   return (
//     <Router>
//       <div className="app-container">
//         {/* Only show the Header when the user is logged in */}
//         {isAuthenticated && <Header />}
//         <div className="main-content">
//           <Routes>
//             {/* Login route */}
//             <Route path="/login" element={<LoginSignup onLogin={handleLogin} />} />
            
//             {/* Protected routes */}
//             <Route
//               path="/"
//               element={
//                 <ProtectedRoute>
//                   <Dashboard />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/users"
//               element={
//                 <ProtectedRoute>
//                   <UserManagement />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/roles"
//               element={
//                 <ProtectedRoute>
//                   <RoleManagement />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/permissions"
//               element={
//                 <ProtectedRoute>
//                   <PermissionManagement />
//                 </ProtectedRoute>
//               }
//             />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;


// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
// import Dashboard from "./pages/Dashboard";
// import UserManagement from "./pages/UserManagement";
// import RoleManagement from "./pages/RoleManagement";
// import PermissionManagement from "./pages/PermissionManagement";
// import LoginSignup from "./pages/LoginSignup";
// import Header from "./componenets/Header";
// import "./App.css";

// function App() {
//   // State for authentication
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   // Function to handle login and set authentication state
//   const handleLogin = () => {
//     setIsAuthenticated(true); // Mark the user as logged in
//   };

//   // Higher-order component for protecting routes
//   const ProtectedRoute = ({ children }) => {
//     return isAuthenticated ? children : <Navigate to="/login" replace />;
//   };

//   return (
//     <Router>
//       <div className="app-container">
//         {/* Only show the Header when the user is logged in */}
//         {isAuthenticated && <Header />}
//         <div className="main-content">
//           <Routes>
//             {/* Login route */}
//             <Route path="/login" element={<LoginSignup onLogin={handleLogin} />} />
            
//             {/* Protected routes */}
//             <Route
//               path="/"
//               element={
//                 <ProtectedRoute>
//                   <Dashboard />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/users"
//               element={
//                 <ProtectedRoute>
//                   <UserManagement />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/roles"
//               element={
//                 <ProtectedRoute>
//                   <RoleManagement />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/permissions"
//               element={
//                 <ProtectedRoute>
//                   <PermissionManagement />
//                 </ProtectedRoute>
//               }
//             />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import UserManagement from "./pages/UserManagement";
import RoleManagement from "./pages/RoleManagement";
import PermissionManagement from "./pages/PermissionManagement";
import LoginSignup from "./pages/LoginSignup";
import Header from "./componenets/Header";
import "./App.css";

function App() {
  // State for authentication
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to handle login and set authentication state
  const handleLogin = () => {
    setIsAuthenticated(true); // Mark the user as logged in
  };

  // Higher-order component for protecting routes
  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" replace />;
  };

  return (
    <Router>
      <div className="app-container">
        {/* Only show the Header when the user is logged in */}
        {isAuthenticated && <Header />}
        <div className="main-content">
          <Routes>
            {/* Login route */}
            <Route path="/login" element={<LoginSignup onLogin={handleLogin} />} />
            
            {/* Protected routes */}
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/users"
              element={
                <ProtectedRoute>
                  <UserManagement />
                </ProtectedRoute>
              }
            />
            <Route
              path="/roles"
              element={
                <ProtectedRoute>
                  <RoleManagement />
                </ProtectedRoute>
              }
            />
            <Route
              path="/permissions"
              element={
                <ProtectedRoute>
                  <PermissionManagement />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
