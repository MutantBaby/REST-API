import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const AllPosts = () => {

  const [message, setMessage] = useState([]);
  const navigate = useNavigate();

  const { id } = useParams();

  const clickHandle = async (e) => {
    e.preventDefault();

    const URL = `http://localhost:8000/posts/allposts/${id}`

    console.log("URL ", window.location.href);
    console.log("ID", id);

    try {
      const response = await axios.get(URL)

      const data1 = await JSON.stringify(response, null, 2);
      const obj = await JSON.parse(data1);

      await setMessage(obj.data)

    } catch (err) {
      console.log("Error in AllPosts ", err);
    }
  }

  return (
    <div>
      <h1>Get All User's Posts</h1>
      <button onClick={clickHandle}>All Posts</button>
      {
        message.map(({ _id, userId, likes, description, img }, key) => (
          <div key={key}>
            <h2>Post 👀 {key + 1}</h2>
            <div>
              <p>Post Id 😘 {_id}</p>
              <p>User Id 😊 {userId}</p>
              <p>Likes ⛷️ {likes.length}</p>
              {/* <div>
                <div>
                  <button style={{ padding: "10px", margin: "10px" }}>Like 👍</button>
                  <button style={{ padding: "10px", margin: "10px" }} >Unlike 👎</button>
                </div>
              </div> */}
              <p>Description 😒 {description}</p>
              <p>Image 👌 {img}</p>
            </div>

            <div>
              <button style={{ padding: "10px", margin: "10px" }} onClick={() => navigate(`/check-post/${_id}`)} >Get Post</button>

              <button style={{ padding: "10px", margin: "10px" }} onClick={() => {
                localStorage.setItem("UPDATE@gmail.com", JSON.stringify({ _id, userId, likes, description, img }))
                navigate(`/update-post/${_id}`)
              }} >Update Post</button>

              <button style={{ padding: "10px", margin: "10px" }} onClick={() => {
                localStorage.setItem("DELETE@gmail.com", JSON.stringify({ _id, userId, likes, description, img }))
                navigate(`/delete-post/${_id}`)
              }} >Delete Post</button>
            </div>

          </div>
        ))
      }
    </div>
  )
}

export default AllPosts;