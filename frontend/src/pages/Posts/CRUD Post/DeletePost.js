import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const DeletePost = () => {

  const [message, setMessage] = useState();
  const [item, setItem] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("DELETE@gmail.com"))
    if (items) {
      setItem(items);
    }
  }, [])

  const { id } = useParams();
  const navigate = useNavigate();

  const URL = `http://localhost:8000/posts/${id}`

  const deletePost = async () => {
    try {
      const response = await axios.delete(URL, { data: item })
      const data1 = await JSON.stringify(response, null, 2);
      const obj = await JSON.parse(data1);

      localStorage.removeItem("DELETE@gmail.com");

      await setMessage(obj.data)

    } catch (err) {
      console.log("Error in DeletePost ", err);
    }
  }

  return (
    <div>
      <div>
        <h1>Delete Post Detail</h1>
        <button onClick={deletePost}>You Sure to delete it</button>
        {
          message ? (
            <>
              <h2>
                {message}
              </h2>

              <button onClick={() => navigate(`/allposts/${item.userId}`)}>Get Back</button>
            </>
          ) : (
            <div >
              <h2>Post 👀</h2>
              <div>
                <p>Likes ⛷️ {item?.likes?.length}</p>
                <p>Description 😒 {item?.description}</p>
                <p>Image 👌 {item?.img}</p>
              </div>
            </div>
          )
        }
      </div >
    </div >

  )
}

export default DeletePost
