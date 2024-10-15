import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../src/App.css";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { deleteUsers } from "./CurdSlice";

export default function Home() {
  const users = useSelector((state) => state.curd.data);
  const navigate = useNavigate()
  const dispatch = useDispatch(); 

  const handleDelete = (id) => {
     dispatch(deleteUsers({id}))
  }

  return (
    <div>
        <div className="container">
          <h1>Create Users</h1>
            <button onClick={() => navigate('/create')}>Create</button>
      <table className="table">
        {/* {" "} */}
        {/* Added <table> tag */}
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((element, index) => (
            <tr key={index}>
              {" "}
              {/* Ensure JSX is returned */}
              <td>{element.id}</td>
              <td>{element.name}</td>
              <td>{element.email}</td>
              <td>
                {/* <button onClick={() => navigate('/update')}>Edit</button> */}
                 <NavLink to={`/update/${element.id}`}>Edit</NavLink>
                 <button onClick={() => handleDelete(element.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}
