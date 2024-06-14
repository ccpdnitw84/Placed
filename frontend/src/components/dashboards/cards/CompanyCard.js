import React from 'react';

const CompanyCard = ({name, role, cgpa, branch }) => {
    return (
        <div className="bg-dark shadow-gray-800 shadow-md rounded-xl bg-opacity-60 backdrop-blur-sm backdrop-saturate-200 p-4 mb-4 border border-gray-400">
            <h2 className="text-xl font-bold text-white">{name}</h2>
            <p className="text-gray-200 mb-2">{role}</p>
            <p className="text-gray-300 mb-2">CGPA: {cgpa}</p>
            <p className="text-gray-300 mb-4">Branch: {branch}</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
                Apply
            </button>
        </div>
    );
};

export default CompanyCard;