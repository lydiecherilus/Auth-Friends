import React from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';

export default function Login(props) {
    const [credentials, setCredentials] = React.useState({
        username: "",
        password: ""
    });

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    const handleOnSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('http://localhost:5000/api/login', credentials)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                props.history.push('/protected');
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input
                    id="username"
                    type="text"
                    name="username"
                    label="username"
                    placeholder="username"
                    onChange={handleChange}
                    value={credentials.username}
                ></input>

                <input
                    required
                    id="password"
                    type="password"
                    name="password"
                    label="Password"
                    placeholder="password"
                    onChange={handleChange}
                    value={credentials.password}
                ></input>

                <button
                    className="button">Log in</button>
            </form>
        </div>
    );
}