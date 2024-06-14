import axios from "axios";
import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [loggedIn, setLoggedIn] = useState(false);
    const {setUser} = useContext(UserContext);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/login", formData, {withCredentials: true})
            .then(response => {
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
        <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col items-center bg-dark bg-opacity-70 backdrop-saturate-200 p-8 rounded shadow-md w-96">
                <h2 className="text-white text-2xl font-bold mb-4">Login</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="atharvkulkarni429@gmail.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="text-gray-300 placeholder-gray-700 bg-dark bg-opacity-10 w-full mb-4 p-2 border border-gray-600 rounded"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="********"
                        value={formData.password}
                        onChange={handleChange}
                        className="text-gray-300 placeholder-gray-700 bg-dark bg-opacity-10 w-full mb-4 p-2 border border-gray-600 rounded"
                        required
                    />
                    <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-xl">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}