import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateUsers } from './CurdSlice';

export default function Update() {
  const { id } = useParams(); // Get the ID from URL params
  const navigate = useNavigate();
  const users = useSelector((state) => state.curd.data); // Get the users data from Redux store
  const dispatch = useDispatch();

  // Find the existing user with the given ID
  const existingElement = users.find((item) => item.id === parseInt(id));

  // Handle case where user is not found
  if (!existingElement) {
    return <div>User not found!</div>;
  }

  // Destructure the name and email from the found user
  const { name, email } = existingElement;

  // Initialize the state with the existing values of name and email
  const [uname, setUname] = useState(name);
  const [uemail, setUemail] = useState(email);

  useEffect(() => {
    // Whenever the existingElement changes, update the state
    setUname(name);
    setUemail(email);
  }, [name, email]);

  const handleClick = () => {
    // Dispatch the update action
    dispatch(
      updateUsers({
        id: parseInt(id), // Convert the ID to a number
        name: uname,
        email: uemail,
      })
    );
    // Navigate back to the home page or users list
    navigate('/');
  };

  return (
    <div>
      <div className="input-container">
        <div className="name">
          <input
            type="text"
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
            onChange={(e) => setUemail(e.target.value)}
          />
        </div>
        <button onClick={handleClick}>Submit</button>
      </div>
    </div>
  );
}
