import React from "react";
import DataTable from "react-data-table-component";

const EmployeeTable = ({ employees, searchTerm = "" }) => {
  // Styles personnalisés pour le tableau
  const customStyles = {
    table: {
      style: {
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
        borderRadius: "10px",
        overflow: "hidden",
      },
    },
    rows: {
      style: {
        backgroundColor: "#f9f9f9",
        color: "#808080",
      },
    },
    headCells: {
      style: {
        backgroundColor: "#f9f9f9",
        color: "#808080",
        fontWeight: "bold",
      },
    },
    cells: {
      style: {
        borderBottom: "1px solid #ddd",
      },
    },
  };

  // Filtrage des employés en fonction du terme de recherche
  const filteredEmployees = employees.filter((employee) => {
    if (!searchTerm) return true;

    return (
      employee.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.address.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.address.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.address.zipCode
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      employee.address.street.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // Colonnes pour la DataTable
  const columns = [
    { name: "First Name", selector: (row) => row.firstName, sortable: true },
    { name: "Last Name", selector: (row) => row.lastName, sortable: true },
    { name: "Start Date", selector: (row) => row.startDate, sortable: true },
    { name: "Department", selector: (row) => row.department, sortable: true },
    { name: "Date of Birth", selector: (row) => row.birthDate, sortable: true },
    { name: "Street", selector: (row) => row.address.street, sortable: true },
    { name: "City", selector: (row) => row.address.city, sortable: true },
    { name: "State", selector: (row) => row.address.state, sortable: true },
    {
      name: "Zip Code",
      selector: (row) => row.address.zipCode,
      sortable: true,
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={filteredEmployees}
      customStyles={customStyles}
      pagination
      paginationPerPage={10}
      paginationRowsPerPageOptions={[10, 20, 50, 100]}
      defaultSortFieldId={1}
      sortServer={false}
      noDataComponent="No employees found matching your search criteria"
    />
  );
};

export default EmployeeTable;
