import './App.css';
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
/* react-redux has 2 hooks: 
    1. useSelector: to access the states
    2. useDispatch: to modify/update/set the states 
*/
// ===== Our reducer functions:
import { addUser, updateUsername, deleteUser } from "./features/UsersFeature";

function App() {
  const dispatch = useDispatch();
  const usersList = useSelector((state) => state.users.value);
  // (state) is the big object, I want to access only the sub-object state.users.value
  // now I can access the `state.users.value` object using `usersList`.

  // ======= Our States (Local): ================================================================= 
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState("");

  return (
    <div className="App">
      {" "}
      <div className="addUser">
        <input
          type="text"
          placeholder="Name..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Username.."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <button
          onClick={() => {
            dispatch(addUser({
              id: usersList[usersList.length - 1].id + 1,
              name,
              username,
            }));
          }}
        >
          Add User
        </button>
      </div>
      <div className="displayUsers">
        {
          usersList.map(user => {
            return (
              <div
                key={user.id}
              >
                <h1> {user.name}</h1>
                <h1> {user.username}</h1>
                <input
                  type="text"
                  placeholder="New Username..."
                  onChange={(event) => {
                    setNewUsername(event.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    dispatch(
                      updateUsername({ id: user.id, username: newUsername })
                    );
                  }}
                >
                  Update Username
                </button>
                <button
                  onClick={() => {
                    dispatch(deleteUser({ id: user.id }));
                  }}
                >
                  Delete User
                </button>
              </div>
            )
          })
        }
      </div>
    </div >
  );
}

export default App;
