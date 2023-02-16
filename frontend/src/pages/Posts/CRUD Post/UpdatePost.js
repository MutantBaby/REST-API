import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const UpdataPost = () => {

  const [img, setImg] = useState();
  const [description, setDescription] = useState();
  const [message, setMessage] = useState();
  const [item, setItem] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("UPDATE@gmail.com"))
    if (items) {
      setItem(items);
    }
  }, [])

  const { id } = useParams();
  const navigate = useNavigate();

  const URL = `http://localhost:8000/posts/${id}`

  const updataPost = async () => {
    const objData = {
      userId: item.userId,
      img,
      description
    }

    try {
      const response = await axios.put(URL, objData)
      const data1 = await JSON.stringify(response, null, 2);
      const obj = await JSON.parse(data1);

      localStorage.removeItem("UPDATE@gmail.com");

      await setMessage(obj.data)

    } catch (err) {
      console.log("Error in updataPost ", err);
    }
  }

  return (
    <div>
      <div>
        <h1>Update Post Detail</h1>

        <form action="">

          <label htmlFor="postTitle">Img (URl String)</label>
          <input type="text" value={img} onChange={(e) => setImg(e.target.value)} />

          <label htmlFor="postContent">Description</label>
          <input type="email" value={description} onChange={(e) => setDescription(e.target.value)} />

          <button onClick={updataPost}>Update Post</button>
        </form>

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

export default UpdataPost
