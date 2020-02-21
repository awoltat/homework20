import React, {useState} from 'react';
import './App.css';
import UserForm from "./components/CreateUser";
import UserList from "./components/UserList";
import CountComponent from "./components/Count";
import StorageService from "./service/StorageService";

function App() {
    let storage = new StorageService();
    const [users, setUsers] = useState(storage.users);

    const createUser = (user) => {
        let currentUsers = storage.users;
        currentUsers.push(user);
        storage.users = currentUsers;
        setUsers(currentUsers);
    };

    const deleteUser = (userToDelete) => {
        let currentUsers = storage.users;
        currentUsers = currentUsers.filter(user => {
            return user.id != userToDelete.id;
        });
        storage.users = currentUsers;
        setUsers(currentUsers);
    };

    return (
        <div className={'menu-header'}>
            <UserForm createUser={createUser}/>
            <UserList deleteUser={deleteUser} users={users}/>
            <CountComponent count={users.length}/>
        </div>
    )
}

export default App;