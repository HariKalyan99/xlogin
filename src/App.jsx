
import { useState } from 'react'
import './App.css'
import Login from './components/Login';

function App() {

  const [userLoggedIn, setUserLoggedIn] = useState("");

  const validateUser = (inp, pwd) => {
    if(inp === "user" && pwd === "password"){
      setUserLoggedIn("login");
    }else {
      setUserLoggedIn("invalid");
    }
  }

  return (
    <div>
      <h1>Login Page</h1>
      {userLoggedIn === "login" ? <p>Welcome, user!</p> : <Login validateUser={validateUser} userLoggedIn={userLoggedIn}>
        <p>Invalid username or password</p>
        </Login>}
    </div>
  )
}

export default App
