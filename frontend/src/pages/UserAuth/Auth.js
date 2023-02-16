import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

const PrettyPrintJson = async ({ data }) => {
  return (<div><pre>{JSON.stringify(data, null, 2)}</pre></div>);
}

const Auth = () => {
  const [usernameUp, setUsernameUp] = useState("");
  const [emailIn, setEmailIn] = useState("");
  const [emailUp, setemailUp] = useState("");
  const [passwordIn, setPasswordIn] = useState("");
  const [passwordUp, setpasswordUp] = useState("");

  const navigate = useNavigate();

  const clickHandleUp = async (event) => {
    event.preventDefault();

    const URL_UP = `http://localhost:8000/users/auth/registration`

    const objDataUp = {
      email: emailUp,
      username: usernameUp,
      password: passwordUp,
    }

    try {
      const response = await axios.post(URL_UP, objDataUp)
      const data = await PrettyPrintJson(response)

      console.log("New User data => (in Auth SignUp) ", data)

    } catch (err) {
      console.log("Error => (in Auth SignUp) => ", err);
    }

  }

  const clickHandleIn = async (event) => {
    event.preventDefault();

    const URL_IN = `http://localhost:8000/users/auth/login`

    const objDataIn = {
      email: emailIn,
      password: passwordIn,
    }

    try {
      const response = await axios.post(URL_IN, objDataIn)
      const id = await JSON.parse(JSON.stringify(response.data._id));

      navigate(`/${id}`);

    } catch (err) {
      console.log("Error => (in Auth SignIn) => ", err);
    }
  }

  return (
    <section>
      <div>
        <h2>Sign Up</h2>
        <form action="">
          <label htmlFor="postTitle">Uername</label>
          <input type="text" value={usernameUp} onChange={(e) => setUsernameUp(e.target.value)} />

          <label htmlFor="postContent">Email Address</label>
          <input type="email" value={emailUp} onChange={(e) => setemailUp(e.target.value)} />

          <label htmlFor="postTitle">Password</label>
          <input type="password" value={passwordUp} onChange={(e) => setpasswordUp(e.target.value)} />

          <button type="button" onClick={clickHandleUp}>Sign Up</button>
        </form>
      </div>

      <div>
        <h2>Sign In</h2>
        <form action="">
          <label htmlFor="postContent">Email Address</label>
          <input type="email" value={emailIn} onChange={(e) => setEmailIn(e.target.value)} />

          <label htmlFor="postTitle">Password</label>
          <input type="password" value={passwordIn} onChange={(e) => setPasswordIn(e.target.value)} />

          <button type="button" onClick={clickHandleIn}>Sign In</button>
        </form>
      </div>
    </section>
  )
}

export default Auth