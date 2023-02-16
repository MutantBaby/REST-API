import MainGet from "./MainGet"
import MainDel from "./MainDel";
import TimeLinePosts from "../Timeline/TimeLinePosts";
import { useNavigate, useParams } from "react-router-dom";

function Main() {

  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <MainGet />
        <MainDel />
        <TimeLinePosts />
      </div>

      <br />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <h1>Update User Details</h1>
          <button onClick={() => navigate(`/${id}/update`)}>Update Details</button>
        </div>

        <div>
          <h1>Upload Post</h1>
          <button onClick={() => navigate(`/posts/${id}/upload`)}>New Post</button>
        </div>

        <div>
          <h1>My All Posts</h1>
          <button onClick={() => navigate(`/allposts/${id}`)}>All Posts</button>
        </div>
      </div>
    </div>
  );
}

export default Main;
