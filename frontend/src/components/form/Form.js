import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateForm } from '../../redux/formSlice/formSlice';

export const Form = ({ setMarker, marker }) => {

  const [city, setCity] = useState("");
  const [from, setfrom] = useState("");
  const [email, setemail] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [description, setdescription] = useState("");
  const [coverPicture, setcoverPicture] = useState("");
  const [profilePicture, setprofilePicture] = useState("");

  const dispatch = useDispatch();

  const clickHandle = () => {
    if (username && password && email) {
      try {
        dispatch(updateForm({
          city,
          from,
          email,
          username,
          password,
          description,
          coverPicture,
          profilePicture
        }))

        setMarker(!marker);
      } catch (err) {
        console.log("code phat gya");
      }
    }

    setCity("")
    setfrom("")
    setemail("")
    setusername("")
    setpassword("")
    setdescription("")
    setcoverPicture("")
    setprofilePicture("")
  }

  return (
    <div>

      <h1>Update User Details</h1>
      <h2>Form</h2>

      <form action="">

        <label htmlFor="postTitle">Uername</label>
        <input type="text" value={username} onChange={(e) => setusername(e.target.value)} />

        <label htmlFor="postContent">Email Address</label>
        <input type="email" value={email} onChange={(e) => setemail(e.target.value)} />

        <label htmlFor="postTitle">Password</label>
        <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} />

        <br />

        <label htmlFor="postContent">City</label>
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />

        <label htmlFor="postContent">From (Address)</label>
        <input type="text" value={from} onChange={(e) => setfrom(e.target.value)} />

        <label htmlFor="postContent">Description</label>
        <input type="text" value={description} onChange={(e) => setdescription(e.target.value)} />

        <br />

        <label htmlFor="postContent">Cover Picture</label>
        <input type="text" value={coverPicture} onChange={(e) => setcoverPicture(e.target.value)} />

        <label htmlFor="postContent">Profile Picture</label>
        <input type="text" value={profilePicture} onChange={(e) => setprofilePicture(e.target.value)} />

        <button type="button" onClick={clickHandle}>Update details of given User</button>
      </form>
    </div>
  )
}
