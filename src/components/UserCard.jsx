import React from "react";

const UserCard = (props) => {
    let user = props.user;

    console.log(user);
    return (
        <>
            <h5>{user.name}</h5>
            <h5>{user.surname}</h5>
            <h5>{user.address}</h5>
        </>
    );
};

export default UserCard;