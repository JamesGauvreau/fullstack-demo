import { useState } from "react";

const AuthForm = ({ setToken }) => {
  const [alert, setAlert] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await fetch("/auth/signIn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await result.json();

    if (data.token) {
      setAlert("");
      setToken(data.token);
    } else {
      setAlert(<p>Invalid Login</p>);
    }
  };

  return (
    <>
      <p>Register below!</p>
      {alert}
      <form onSubmit={handleSubmit}>
      <label>
          First Name:
          <input
            type="text"
            value={fName}
            onChange={(e) => setfName(e.target.value)}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            value={lName}
            onChange={(e) => setlName(e.target.value)}
          />
        </label>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          Confirm Password:
          <input
            // type="password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {/* <p>If you don't have an account, then click here to register!</p> */}
    </>
  );
};

export default AuthForm;
