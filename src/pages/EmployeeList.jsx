import React, { useState } from "react";
import { Link } from "react-router-dom";
import EmployeeTable from "../components/EmployeeTable";
import SearchBar from "../components/SearchBar";
import { useEmployees } from "../context/EmployeeContext";

const EmployeeList = () => {
  const { employees } = useEmployees(); // Utilisation de notre hook personnalisé
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">HRNet</h1>
        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          Create Employee
        </Link>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Current Employees</h2>
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            placeholder="Search employees..."
          />
        </div>

        {employees.length === 0 ? (
          <p className="text-gray-500">
            No employees found. Add some employees to see them here.
          </p>
        ) : (
          <EmployeeTable employees={employees} searchTerm={searchTerm} />
        )}
      </div>
    </div>
  );
};

export default EmployeeList;
