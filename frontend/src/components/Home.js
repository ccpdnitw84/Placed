import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <div className='bg-dark bg-opacity-70 rounded-full mb-6'>
                <svg fill="#FFFFFF" width="64px" height="64px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                    <g id="Outline">
                        <g data-name="Outline" id="Outline-2">
                            <path d="M41,29a1,1,0,0,1-1,1H37.3a7,7,0,0,1-6.92,6H27l4.8,6.4a1,1,0,0,1-1.6,1.2l-5.91-7.89A1.013,1.013,0,0,1,25,34h5.38a5.009,5.009,0,0,0,4.9-4H25a1,1,0,0,1,0-2H35.28a5.009,5.009,0,0,0-4.9-4H25a1,1,0,0,1,0-2H40a1,1,0,0,1,0,2H35.26a6.922,6.922,0,0,1,2.04,4H40A1,1,0,0,1,41,29Z"/>
                            <path d="M32,2A30,30,0,1,0,62,32,30.034,30.034,0,0,0,32,2Zm0,58A28,28,0,1,1,60,32,28.032,28.032,0,0,1,32,60Z"/>
                            <path d="M49.229,18.351a3.127,3.127,0,0,0,.426-1.558,3.172,3.172,0,1,0-3.173,3.172,3.138,3.138,0,0,0,1.264-.266A19.994,19.994,0,0,1,22.691,49.707a1,1,0,1,0-.931,1.769A21.986,21.986,0,0,0,49.229,18.351Zm-3.918-1.558a1.172,1.172,0,1,1,1.171,1.172A1.172,1.172,0,0,1,45.311,16.793Z"/>
                            <path d="M16.793,44.035a3.157,3.157,0,0,0-.692.081A19.779,19.779,0,0,1,12,32,20.023,20.023,0,0,1,32,12a19.811,19.811,0,0,1,8.463,1.874,1,1,0,0,0,.848-1.812A21.989,21.989,0,0,0,14.39,45.16a3.141,3.141,0,0,0-.769,2.047,3.173,3.173,0,1,0,3.172-3.172Zm0,4.344a1.172,1.172,0,1,1,1.173-1.172A1.172,1.172,0,0,1,16.793,48.379Z"/>
                        </g>
                    </g>
                </svg>
            </div>
            <h1 className='text-white text-4xl font-bold mb-4'>Welcome to Placed</h1>
            <p className='text-lg text-gray-400 mb-8'>Your one-stop destination for placements!</p>
            <div className='flex space-x-4'>
                <Link to="/register" className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-xl'>
                    Register
                </Link>
                <Link to="/login" className='bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-xl'>
                    Login
                </Link>
            </div>
        </div>
    )
}