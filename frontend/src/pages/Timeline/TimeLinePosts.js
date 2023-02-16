import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const TimeLinePosts = () => {

  const navigate = useNavigate();
  const { id } = useParams();

  const clickHandle = () => {
    navigate(`/posts/${id}/timeline`)
  }

  return (
    <div>
      <h1>User Timeline</h1>
      <button onClick={clickHandle}>Check Timeline</button>
    </div>
  )
}

export default TimeLinePosts