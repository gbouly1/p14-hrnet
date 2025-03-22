import { createContext, useContext, useState } from "react";

// Création du contexte
const EmployeeContext = createContext();

export function EmployeeProvider({ children }) {
  // État  pour stocker les employés
  const [employees, setEmployees] = useState([]);

  // Fonction pour ajouter un nouvel employé
  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  // Regroupement des valeurs et fonctions à partager
  const value = {
    employees,
    addEmployee,
  };

  // Retour du Provider avec les valeurs
  return (
    <EmployeeContext.Provider value={value}>
      {children}
    </EmployeeContext.Provider>
  );
}

// Hook personnalisé pour utiliser  le contexte
export function useEmployees() {
  return useContext(EmployeeContext);
}
