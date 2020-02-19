import React, {useState} from 'react';
import './App.css';
import UserForm from "./components/CreateUser";
import UserList from "./components/UserList";

function App() {
    const [users, setUsers] = useState([]);

    const createUser = (user) => {
        setUsers(oldUsers => [...oldUsers, user]);
    };
    return (
        <div className={'menu-header'}>
            <h1>Hello</h1>
            <UserForm createUser={createUser}/>
            <UserList users={users}/>
        </div>
    )
}

export default App;