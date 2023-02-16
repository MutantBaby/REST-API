/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios"

function MainGet() {

  const { id } = useParams();
  const [message, setMessage] = useState();

  const PrettyPrintJson = async ({ data }) => {
    return (<div><pre>{JSON.stringify(data, null, 2)}</pre></div>);
  }

  const clickHandle = async (e) => {
    e.preventDefault();

    const URL = `http://localhost:8000/${id}`

    const objData = {
      userId: id,
    }

    try {
      const response = await axios.get(URL, objData)
      const data = await PrettyPrintJson(response)

      setMessage(data)

    } catch (err) {
      console.log("Error in MainGet ", err);
    }
  }

  return (
    <div>
      <h1>Get Details of User</h1>
      <button onClick={clickHandle}>All details</button>
      {message}
    </div>
  );
}

export default MainGet;