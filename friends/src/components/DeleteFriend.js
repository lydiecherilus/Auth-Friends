import React, { useState } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';

const DeleteFriend = props => {
    const [deleteFriend, setDeleteFriend] = useState({
        id: "",
        name: "",
        age: "",
        email: ""
    })

    const updateDeleteFriend = (event, id) => {
        event.preventDefault()
        axiosWithAuth()
            .delete(`/friends/${id}`)
            .then(res => {
                console.log(res)
            })
            .catch(error => console.log(error))
    }

    const handleChanges = event => {
        setDeleteFriend({
            ...deleteFriend,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div>
            <h3>Delete Friend</h3>
            <h4>{deleteFriend.name}</h4>
            <p>{deleteFriend.age}</p>
            <p>{deleteFriend.email}</p>
            <div>
                <form >
                    <input type="text" name="name" placeholder="name to delete" value={deleteFriend.name} onChange={handleChanges}></input>
                    <input type="text" name="age" placeholder="age to delete" value={deleteFriend.age} onChange={handleChanges}></input>
                    <input type="text" name="email" placeholder="email to delete" value={deleteFriend.email} onChange={handleChanges}></input>
                    <button type="submit" className="button" onClick={updateDeleteFriend}>Delete Fiend</button>
                </form>
            </div>
        </div>
    );
}
export default DeleteFriend;