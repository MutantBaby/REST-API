import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const Timeline = () => {

  const [message, setMessage] = useState([]);

  const { id } = useParams();

  const clickHandle = async (e) => {
    e.preventDefault();

    const URL = `http://localhost:8000/posts/${id}/timeline`

    console.log("URL ", window.location.href);
    console.log("ID", id);

    try {
      const response = await axios.get(URL)

      const data1 = await JSON.stringify(response, null, 2);
      const obj = await JSON.parse(data1);

      await setMessage(obj.data)

    } catch (err) {
      console.log("Error in TimeLine ", err);
    }
  }

  return (
    <div>
      <h1>Get User's Post TimeLine</h1>
      <button onClick={clickHandle}>TimeLine</button>
      {
        message.map(({ _id, userId, likes, description, img }, key) => (
          <div key={key}>
            <h2>Post 👀 {key + 1}</h2>
            <div>
              <p>Post Id 😘 {_id}</p>
              <p>User Id 😊 {userId}</p>
              <div>
                <p>Likes ⛷️ {likes.length}</p>
                <div>
                  <button style={{ padding: "10px", margin: "10px" }}>Like 👍</button>
                  <button style={{ padding: "10px", margin: "10px" }} >Unlike 👎</button>
                </div>
              </div>
              <p>Description 😒 {description}</p>
              <p>Image 👌 {img}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Timeline