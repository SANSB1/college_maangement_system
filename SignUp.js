import React from "react";
import "./SignUp.css"; // Your custom CSS for styling

function SignUp() {
  return (
    <div className="signup-container">
      <h1>Signup Page</h1>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />

        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default SignUp;
