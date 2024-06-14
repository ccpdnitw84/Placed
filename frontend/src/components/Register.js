import axios from "axios";
import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function Register() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        mobile: '',
        password: '',
        role: ''
    });
    const [registered, setRegistered] = useState(false);
    const [redirectToLogin, setRedirectToLogin] = useState(false);
    const {setUser} = useContext(UserContext);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/register", formData, {withCredentials: true})
            .then(response => {
                if (response.status === 200) {
                    setUser(response.data.user);
                    setRegistered(true);
                }
            })
            .catch(err => {
                if (err.response && err.response.status === 400 && err.response.data.message === 'User already has an account') {
                    alert("User already has an account. Redirecting to login page.");
                    setRedirectToLogin(true);
                } else {
                    console.error("Error:", err.response ? err.response.data : err.message);
                }
            });
    };

    if(registered) {
        return <Navigate to='/dashboard' />;
    }

    if(redirectToLogin){
        return <Navigate to='/login' />;
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col items-center bg-dark bg-opacity-70 backdrop-saturate-200 p-8 rounded shadow-md w-96">
                <h2 className="text-white text-2xl font-bold mb-4">Register</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Atharv Kulkarni"
                        value={formData.username}
                        onChange={handleChange}
                        className="text-gray-300 placeholder-gray-700 bg-dark bg-opacity-10 w-full mb-4 p-2 border border-gray-600 rounded"
                        required
                    />
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
                        type="tel"
                        name="mobile"
                        placeholder="8446833683"
                        value={formData.mobile}
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
                    <select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="text-gray-300 placeholder-gray-700 bg-dark bg-opacity-10 w-full mb-4 p-2 border border-gray-600 rounded"
                        required
                    >
                        <option value="">Select Role</option>
                        <option value="head_tnp">Head of TNP</option>
                        <option value="tnp_coordinator">TNP Coordinator</option>
                        <option value="student">Student</option>
                        <option value="hr">HR of a Company</option>
                    </select>
                    <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-xl">
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}