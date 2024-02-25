import React, { useRef } from "react";

const Login = ({ validateUser, children, userLoggedIn }) => {
  const inputRef = useRef("");
  const passwordRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const inp = inputRef.current.value;
    const pwd = passwordRef.current.value;
    validateUser(inp, pwd);
  };
  return (
    <>
    {userLoggedIn === "invalid" && children}
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" ref={inputRef} required />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" ref={passwordRef} required />
      </div>
      <button type="submit">Submit</button>
    </form>
    </>
  );
};

export default Login;
