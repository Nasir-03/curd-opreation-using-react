import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { updateUsers } from './CurdSlice';

export default function Update() {
    const {id} = useParams();
    const navigate = useNavigate()
    const users = useSelector((state) => state.curd.data)
    const existingElement = users.filter((item) => item.id == id)
    const dispatch = useDispatch()

    const {name, email} = existingElement;
    const[uname, setUname] = useState(name)
    const[uemail, setuemail] = useState(email)
    
    const handleClick = () => {
        dispatch(updateUsers({
            id: id,
            name: uname,
            email: uemail
        }))
        navigate('/')
    }

  return (
    <div>
       <div>
      <div className="input-container">
        <div className="name">
          <input
            type="name"
            placeholder="Update Name"
            value={uname}
            onChange={(e) => setUname(e.target.value)}
          />
        </div>
        <div className="email">
          <input
            type="email"
            placeholder="Update Email"
            value={uemail}
            onChange={(e) => setuemail(e.target.value)}
          />
        </div>
        <button onClick={handleClick}>submit</button>
      </div>
    </div>
    </div>
  )
}
