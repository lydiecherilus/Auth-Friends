
import React, { useEffect, useState } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Loader from 'react-loader-spinner';
import AddFriend from "./AddFriend"
import EditFriend from "./EditFriend"
import DeleteFriend from "./DeleteFriend"

const Friend = (props) => {
    return (
        <div className="friend" key={props.friend.id}>
            <h3>Name: {props.friend.name}</h3>
            <h4>Age: {props.friend.age}</h4>
            <h4>Email: {props.friend.email}</h4>
        </div>
    );
}

const FriendList = props => {
    const [Friends, setFriends] = useState([])
    useEffect(() => {
        axiosWithAuth()
            .get("http://localhost:5000/api/friends")
            .then(res => {
                setFriends(res.data)
            })
            .catch(error => console.log(error))
    }, []);

    return (
        <div className="friendlist">
            <AddFriend />
            <EditFriend />
            <DeleteFriend />
            {Friends.map(friend => (
                <Friend key={friend.id} friend={friend} />
            ))}
        </div>
    )
}
export default FriendList;