import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

export const NewPost = () => {
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const { id } = useParams();

  const clickHandle = async () => {

    const URL = `http://localhost:8000/posts/`

    const objData = {
      img: img,
      userId: id,
      description: description,
    }

    try {
      const response = await axios.post(URL, objData)
      const data1 = await JSON.stringify(response, null, 2);
      const obj = await JSON.parse(data1);

      await setMessage(obj.data)

    } catch (err) {
      console.log("Error in NewPost ", err);
    }

    setImg("");
    setDescription("");
  }

  return (
    <div>
      <h1>Fill data to upload</h1>
      <form action="">
        <label htmlFor="postTitle">Img (URL String)</label>
        <input type="text" value={img} onChange={(e) => setImg(e.target.value)} />
        <br />
        <label htmlFor="postContent">Cover Picture</label>
        <textarea type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        <br />
        <button type="button" onClick={clickHandle}>Upload Image</button>
      </form>

      <div>
        <h2>Image Content</h2>
        <div>
          <p>Image 🥶 {message?.img}</p>
          <p>Description 🤷‍♂️ {message?.description}</p>
        </div>
      </div>

    </div>
  )
}
