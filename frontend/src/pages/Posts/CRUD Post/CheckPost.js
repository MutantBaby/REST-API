import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const CheckPost = () => {

  const [message, setMessage] = useState([]);

  const { id } = useParams();

  const URL = `http://localhost:8000/posts/${id}`

  console.log("URL ", window.location.href);
  console.log("ID", id);

  useEffect(() => {

    const getResult = async () => {
      try {
        const response = await axios.get(URL)

        const data1 = await JSON.stringify(response, null, 2);
        const obj = await JSON.parse(data1);

        console.log("response in checkPost", response);
        console.log("data1 in checkPost", data1);
        console.log("obj in checkPost", obj);

        await setMessage(obj.data)
        console.log("Message => ", message)

      } catch (err) {
        console.log("Error in CheckPost ", err);
      }
    }

    getResult();
  }, [URL])

  return (
    <div>
      <div>
        <h1>Get Post Detail</h1>
        {
          <div >
            <h2>Post 👀</h2>
            <div>
              <p>Likes ⛷️ {message?.likes}</p>
              <p>Description 😒 {message?.description}</p>
              <p>Image 👌 {message?.img}</p>
            </div>
          </div>
        }
      </div>
    </div>

  )
}

export default CheckPost
