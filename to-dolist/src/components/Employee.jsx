import React, { useState } from "react";

function Employee() {
  const [employees, setEmployees] = useState([]);
  const [employee, setEmployee] = useState("");

  const addEmployee = () => {
    if (employee.trim() === "") return;
    setEmployees([...employees, { id: Date.now(), name: employee }]);
    setEmployee("");
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  const updateEmployee = (id, newName) => {
    setEmployees(
      employees.map((emp) =>
        emp.id === id ? { ...emp, name: newName } : emp
      )
    );
  };

  const styles = {
    container: {
      maxWidth: "600px",
      margin: "2rem auto",
      padding: "2rem",
      backgroundColor: "#f4f4f9",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
    },
    title: {
      color: "#6200ea",
      fontSize: "1.8rem",
      marginBottom: "1rem",
    },
    input: {
      padding: "10px",
      width: "70%",
      marginRight: "10px",
      borderRadius: "5px",
      border: "1px solid #ddd",
      fontSize: "1rem",
    },
    button: {
      padding: "10px 20px",
      fontSize: "1rem",
      backgroundColor: "#6200ea",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "transform 0.3s, background-color 0.3s",
    },
    buttonHover: {
      transform: "scale(1.05)",
      backgroundColor: "#3700b3",
    },
    list: {
      listStyleType: "none",
      padding: "0",
      marginTop: "1.5rem",
    },
    listItem: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px 15px",
      marginBottom: "10px",
      border: "1px solid #ddd",
      borderRadius: "5px",
      backgroundColor: "#ffffff",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.3s",
    },
    listItemHover: {
      transform: "scale(1.02)",
    },
    deleteButton: {
      backgroundColor: "#e91e63",
      border: "none",
      color: "#fff",
      padding: "5px 10px",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
    deleteButtonHover: {
      backgroundColor: "#c2185b",
    },
    inputUpdate: {
      flex: 1,
      padding: "10px",
      borderRadius: "5px",
      border: "1px solid #ddd",
      marginRight: "10px",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Employee Management</h2>
      <input
        type="text"
        value={employee}
        onChange={(e) => setEmployee(e.target.value)}
        placeholder="Add an employee"
        style={styles.input}
      />
      <button
        onClick={addEmployee}
        style={{
          ...styles.button,
          ...(employee ? styles.buttonHover : {}),
        }}
      >
        Add
      </button>
      <ul style={styles.list}>
        {employees.map((emp) => (
          <li
            key={emp.id}
            style={styles.listItem}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.02)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            <input
              type="text"
              value={emp.name}
              onChange={(e) => updateEmployee(emp.id, e.target.value)}
              style={styles.inputUpdate}
            />
            <button
              onClick={() => deleteEmployee(emp.id)}
              style={{
                ...styles.deleteButton,
                ...(styles.deleteButtonHover ? styles.deleteButtonHover : {}),
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#c2185b")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#e91e63")
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Employee;
