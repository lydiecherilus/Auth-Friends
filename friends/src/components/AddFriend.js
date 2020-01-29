import React, { useState, useEffect } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';

const AddFriend = props => {

    const [newFriend, setNewFriend] = useState({
        id: "",
        name: "",
        age: "",
        email: ""
    })

    const handleSubmit = event => {
        event.preventDefault()
        axiosWithAuth()
            .post("/api/friends", newFriend)
            .then(res => {
                console.log(res.event.target)
                setNewFriend({
                    id: "",
                    name: "",
                    age: "",
                    email: ""
                })
            })
            .catch(err => console.log(err))
    }

    const handleChanges = event => {
        setNewFriend({
            ...newFriend,
            [event.target.name]: event.target.value
        })
    }
    return (
        <div>
             <h3>Add Friend</h3>
            <form className="form">
                <input type="text" name="id" placeholder="id" value={newFriend.id} className="input" onChange={handleChanges}></input>
                <input type="text" name="name" placeholder="name" value={newFriend.name} className="input" onChange={handleChanges}></input>
                <input type="text" name="age" placeholder="age" value={newFriend.age} className="input" onChange={handleChanges} ></input>
                <input type="email" name="email" placeholder="email" value={newFriend.email} className="input" onChange={handleChanges}></input>
                <button type="submit" className="button" onClick={handleSubmit}>Add Fiend</button>
                
            </form>
        </div>
    )
}
export default AddFriend;