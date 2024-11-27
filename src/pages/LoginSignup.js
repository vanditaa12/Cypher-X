// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./LoginSignup.css";

// const LoginSignup = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("User");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (username && password) {
//       // Store user info (You can replace this with API calls in a real app)
//       localStorage.setItem("username", username);
//       localStorage.setItem("role", role);

//       // Redirect to Dashboard
//       navigate("/");
//     } else {
//       alert("Please fill all fields!");
//     }
//   };

//   return (
//     <div className="login-signup-container">
//       <h2>Login / Signup</h2>
//       <form className="login-signup-form" onSubmit={handleSubmit}>
//         <label htmlFor="username">Username:</label>
//         <input
//           type="text"
//           id="username"
//           placeholder="Enter your username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />

//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           placeholder="Enter your password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />

//         <label htmlFor="role">Role:</label>
//         <select
//           id="role"
//           value={role}
//           onChange={(e) => setRole(e.target.value)}
//           required
//         >
//           <option value="User">User</option>
//           <option value="Admin">Admin</option>
//           <option value="Viewer">Viewer</option>
//         </select>

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default LoginSignup;


// import React, { useState } from "react";
// import "./LoginSignup.css";

// const LoginSignup = ({ onLogin }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!email || !password) {
//       setError("Please fill in all fields.");
//       return;
//     }
//     setError("");
//     onLogin(); // Call the login handler
//   };

//   return (
//     <div className="login-page">
//       <div className="login-container">
//         <h2>Login / Signup</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           {error && <p className="error-message">{error}</p>}
//           <button type="submit" className="login-button">
//             Proceed
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginSignup;


// import React, { useState } from 'react';
// import './LoginSignup.css';

// function LoginSignup() {
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleLogin = () => {
//     // Redirect to dashboard
//     window.location.href = '/';
//   };

//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <h2>Login / Signup</h2>
//         <div className="form-group">
//           <label>Email</label>
//           <input type="email" placeholder="Enter your email" required />
//         </div>
//         <div className="form-group password-field">
//           <label>Password</label>
//           <div className="password-container">
//             <input
//               type={showPassword ? 'text' : 'password'}
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <span
//               className="eye-icon"
//               onClick={togglePasswordVisibility}
//               title={showPassword ? 'Hide password' : 'Show password'}
//             >
//               {showPassword ? '👁️‍🗨️' : '👁️'}
//             </span>
//           </div>
//         </div>
//         <button className="login-button" onClick={handleLogin}>
//           Proceed
//         </button>
//       </div>
//     </div>
//   );
// }

// export default LoginSignup;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './LoginSignup.css';

// function LoginSignup() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);

//   // Using useNavigate for navigation
//   const navigate = useNavigate();

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleLogin = () => {
//     // Basic validation for email and password
//     if (!email || !password) {
//       alert('Please fill in both email and password.');
//       return;
//     }

//     // Perform navigation to dashboard
//     navigate('/');
//   };

//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <h2>Login / Signup</h2>
//         <div className="form-group">
//           <label>Email</label>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group password-field">
//           <label>Password</label>
//           <div className="password-container">
//             <input
//               type={showPassword ? 'text' : 'password'}
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <span
//               className="eye-icon"
//               onClick={togglePasswordVisibility}
//               title={showPassword ? 'Hide password' : 'Show password'}
//             >
//               {showPassword ? '👁️‍🗨️' : '👁️'}
//             </span>
//           </div>
//         </div>
//         <button className="login-button" onClick={handleLogin}>
//           Proceed
//         </button>
//       </div>
//     </div>
//   );
// }

// export default LoginSignup;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./LoginSignup.css";

// const LoginSignup = ({ onLogin }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const navigate = useNavigate();

//   // Handle password visibility toggle
//   const togglePassword = () => setShowPassword(!showPassword);

//   // Handle proceed button click (Login)
//   const handleProceed = () => {
//     if (email && password) {
//       onLogin(); // Set user as authenticated
//       navigate("/"); // Redirect to the dashboard
//     } else {
//       alert("Please enter valid email and password.");
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-form">
//         <h2>Login / Signup</h2>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <div className="password-container">
//           <input
//             type={showPassword ? "text" : "password"}
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <button type="button" onClick={togglePassword}>
//             👁️
//           </button>
//         </div>
//         <button onClick={handleProceed} className="proceed-btn">
//           Proceed
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LoginSignup;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./LoginSignup.css";

// const LoginSignup = ({ onLogin }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const navigate = useNavigate();

//   // Handle password visibility toggle
//   const togglePassword = () => setShowPassword(!showPassword);

//   // Handle proceed button click (Login)
//   const handleProceed = () => {
//     if (email && password) {
//       onLogin(); // Set user as authenticated
//       navigate("/"); // Redirect to the dashboard
//     } else {
//       alert("Please enter valid email and password.");
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-form-container">
//         <h2>Login / Signup</h2>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <div className="password-container">
//           <input
//             type={showPassword ? "text" : "password"}
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <button type="button" onClick={togglePassword}>
//             👁️
//           </button>
//         </div>
//         <button onClick={handleProceed} className="proceed-btn">
//           Proceed
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LoginSignup;



// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./LoginSignup.css";

// const LoginSignup = ({ onLogin }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const navigate = useNavigate();

//   // Handle password visibility toggle
//   const togglePassword = () => setShowPassword(!showPassword);

//   // Handle proceed button click (Login)
//   const handleProceed = () => {
//     if (email && password) {
//       onLogin(); // Set user as authenticated
//       navigate("/"); // Redirect to the dashboard
//     } else {
//       alert("Please enter valid email and password.");
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-form-container">
//         <h2>Login / Signup</h2>
//         <div className="input-field">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="input-field password-container">
//           <label htmlFor="password">Password:</label>
//           <input
//             type={showPassword ? "text" : "password"}
//             id="password"
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <button type="button" className="eye-icon" onClick={togglePassword}>
//             👁️
//           </button>
//         </div>
//         <button onClick={handleProceed} className="proceed-btn">
//           Proceed
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LoginSignup;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginSignup.css";

const LoginSignup = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  // Handle password visibility toggle
  const togglePassword = () => setShowPassword(!showPassword);

  // Handle proceed button click (Login)
  const handleProceed = () => {
    if (email && password) {
      onLogin(); // Set user as authenticated
      navigate("/"); // Redirect to the dashboard
    } else {
      alert("Please enter valid email and password.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <h2>Login / Signup</h2>

        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="password-container">
          <label htmlFor="password" className="password-label">Password</label>
          <div className="password-input-container">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="eye-icon"
              onClick={togglePassword}
              title={showPassword ? "Hide password" : "Show password"}
            >
              👁️
            </span>
          </div>
        </div>

        <button onClick={handleProceed} className="proceed-btn">
          Proceed
        </button>
      </div>
    </div>
  );
};

export default LoginSignup;
