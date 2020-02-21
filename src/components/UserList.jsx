import React, {useEffect, useState} from "react";
import UserCard from "./UserCard";
import './userList.css';
import Search from "./Search";

const UserList = (props) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [users, setUsers] = useState([]);
    let usersData = props.users;

    const handleSearch = (value) => {
        setSearchTerm(value);
    };

    useEffect(() => {
        const results = usersData.filter(userData => {
            return userData.name.toLowerCase().includes(searchTerm);
        });
        setUsers(results);
    }, [searchTerm]);

    useEffect(() => {
        setUsers(usersData);
    }, [usersData]);

    return (
        <>
            <Search
                title="Search users "
                placeholder="Enter value"
                onChange={handleSearch}/>
            <div className='user-list'>
                <h3>Users list</h3>
                <div className='user-item'>
                    {users.map(user => <UserCard key={user.id}
                                                 user={user}
                                                 handleUserDelete={props.deleteUser}
                                                 style='width: 100%'/>)}
                </div>
            </div>
        </>
    );
};

export default UserList;