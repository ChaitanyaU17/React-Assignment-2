import React, {useState} from "react";
import './App.css';
import AddUser from "./components/Users/AddUser";
import UsersList from './components/Users/UsersList'

function App() {

  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge, college) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {name: uName, age: uAge, college: college, id: Math.random().toString() }];
    }) 
  }

  return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList} />
    </React.Fragment>
  );
}

export default App;
