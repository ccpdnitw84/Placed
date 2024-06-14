import React, { useEffect, useState } from "react";
import StudentNav from "./navbars/StudentNav";
import CompanyCard from "./cards/CompanyCard";
import BrochureList from "./brochures/BrochureList";
import axios from "axios";

export default function Student() {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        const getCompanyData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/dashboard", {withCredentials: true});
                setCompanies(response.data);
                console.log(response.data);
            } catch (err) {
                console.error(err);
            }
        };

        getCompanyData();
    }, []);

    return (
        <div className="min-h-screen">
            <StudentNav />
            <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="lg:col-span-2">
                    <h1 className="text-3xl font-bold text-white mb-4">Companies for Placement</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                        {companies.map(company => (
                            <CompanyCard
                                key={company._id} 
                                name={company.name}
                                role={company.role}
                                cgpa={company.cgpa}
                                branch={company.branch}
                            />
                        ))}
                    </div>
                </div>
                <div className="lg:col-span-1">
                    <h1 className="text-3xl font-bold text-white mb-4">Previous Years' Brochures</h1>
                    <BrochureList />
                </div>
            </div>
        </div>
    );
}