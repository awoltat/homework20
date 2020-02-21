import React from "react";
import './userCard.css';

const UserCard = (props) => {
    let user = props.user;

    let handleDelete = () => {
        props.handleUserDelete(user);
    };

    return (
        <div className='user-card'>
            <h3>{user.name}</h3>
            <h3>{user.surname}</h3>
            <p>{user.address}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default UserCard;