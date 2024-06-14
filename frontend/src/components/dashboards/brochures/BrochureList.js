import React from 'react';

const BrochureList = () => {
    const brochures = [
        { id: 1, name: 'Brochure 2022-23', file: '/pdfs/brochure1.pdf' },
        { id: 2, name: 'Brochure 2021-22', file: '/pdfs/brochure2.pdf' },
    ];

    return (
        <div className="grid gap-4">
            {brochures.map(brochure => (
                <div key={brochure.id} className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
                    <span className="text-gray-800">{brochure.name}</span>
                    <a href={brochure.file} download className="text-blue-500 hover:underline">Download</a>
                </div>
            ))}
        </div>
    );
};

export default BrochureList;