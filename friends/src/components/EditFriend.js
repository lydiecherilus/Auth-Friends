import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const EditFriend = props => {
    const [editFriend, setEditFriend] = useState({
        id: "",
        name: "",
        age: "",
        email: ""
    })

    const updateEditFriend = event => {
        event.preventDefault()
        axiosWithAuth()
            .put('/api/friends/:id', updateEditFriend)
            .then(res => {
                console.log(res)
            })
            .catch(error => console.log(error))
    }

    const handleChanges = event => {
        setEditFriend({
            ...editFriend,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div>
            <h3>Edit Friend</h3>
            <h4>{editFriend.name}</h4>
            <p>{editFriend.age}</p>
            <p>{editFriend.email}</p>
            <div>
                <form >
                    {/* <input type="text" name="id" placeholder="id" value={editFriend.id} className="input" onChange={handleChanges}></input> */}
                    <input type="text" name="name" placeholder="name to edit" value={editFriend.name} onChange={handleChanges}></input>
                    <input type="text" name="age" placeholder="age to edit" value={editFriend.age} onChange={handleChanges}></input>
                    <input type="text" name="email" placeholder="email to edit" value={editFriend.email} onChange={handleChanges}></input>
                    <button type="submit" className="button" onClick={updateEditFriend}>Edit Friend</button>
                </form>
            </div>
        </div>
    );
}

export default EditFriend;