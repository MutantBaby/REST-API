import { useNavigate, useParams } from "react-router-dom";

import axios from "axios"

function MainDel() {
  const { id } = useParams();

  const navigate = useNavigate();

  const clickHandle = async (e) => {
    e.preventDefault();

    const URL = `http://localhost:8000/${id}`

    const objData = {
      userId: id,
    }

    try {
      const response = await axios.delete(URL, { data: objData })

      console.log(response)

      navigate("/");

    } catch (err) {
      console.log("Error in MainDel ", err);
    }
  }

  return (
    <div>
      <h1>Delete User Profile</h1>
      <button onClick={clickHandle}>Delete (Not Recoverable)</button>
    </div>
  );
}


export default MainDel;