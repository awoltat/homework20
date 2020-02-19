import React from "react";
import UserCard from "./UserCard";

const UserList = (props) => {
    let users = props.users;


    console.log(users);
    return (
        <>
            <h3>Users list</h3>
            <div>
                {users.map(user => <UserCard user={user} style='width: 100%'/>)}
            </div>
        </>

    );
};

export default UserList;