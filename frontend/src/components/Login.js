import axios from "axios";
import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function Login() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        mobile: '',
        password: '',
        role: ''
    });
    const [loggedIn, setLoggedIn] = useState(false);
    const {setUser} = useContext(UserContext);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/login", formData)
            .then(response => {
                console.log("Response data: ", response.data);
                setUser(response.data.user);    
                setLoggedIn(true);
            })
            .catch(err => {
                console.log("error");
                console.error(err);
            });
    };

    if(loggedIn) {
        return <Navigate to='/dashboard' />;
    }

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="flex flex-col items-center bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="atharvkulkarni429@gmail.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full mb-4 p-2 border border-gray-300 rounded"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="********"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full mb-4 p-2 border border-gray-300 rounded"
                        required
                    />
                    <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-xl">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}