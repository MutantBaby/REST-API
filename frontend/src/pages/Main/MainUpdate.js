import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import axios from "axios"

import { Form } from "../../components/form/Form"

const PrettyPrintJson = async ({ data }) => {
  return (<div><pre>{JSON.stringify(data, null, 2)}</pre></div>);
}

function MainUpdate() {
  const { id } = useParams();

  const [marker, setMarker] = useState(false);
  const [message, setMessage] = useState();

  const {
    city,
    from,
    email,
    username,
    password,
    description,
    coverPicture,
    profilePicture
  } = useSelector((state) => state.form);

  const URL = `http://localhost:8000/${id}`

  if (marker) {
    (async () => {
      const objData = {
        userId: id,
        city,
        from,
        email,
        username,
        password,
        description,
        coverPicture,
        profilePicture
      }

      try {
        const response = await axios.put(URL, objData)
        const data = await PrettyPrintJson(response)

        setMessage(data)

      } catch (err) {
        console.log("Error in MainUpdate ", err);
      }
    })()
  }

  return (
    <div>
      <Form setMarker={setMarker} marker={marker} />

      <h5>Message</h5>
      {message}
    </div>
  );
}

export default MainUpdate;