import React, { useState, useContext } from "react";
import { logContext } from "../App";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  let { login, setLogin } = useContext(logContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username && password) {
      // Add your login logic here
      setLogin(username);
    } else {
      setError("Please enter username and password");
    }
  };

  return (
    <>
      <div
        className="signup"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "50vh",
          gap: "20px",
        }}
      >
        <h2 style={{ marginBottom: 20, fontSize: "1.9rem" }}>Login</h2>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Username"
            style={{
              padding: 10,
              margin: 10,
              border: "1px solid #ccc",
              borderRadius: 5,
              width: 300,
            }}
          />
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
            style={{
              padding: 10,
              margin: 10,
              border: "1px solid #ccc",
              borderRadius: 5,
              width: 300,
            }}
          />
          {error && <p style={{ color: "red" }}>{error}</p>}

          <button
            type="submit"
            style={{
              padding: 10,
              backgroundColor: "#4CAF50",
              color: "#fff",
              border: "none",
              borderRadius: 5,
              cursor: "pointer",
              marginTop: 20,
            }}
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
