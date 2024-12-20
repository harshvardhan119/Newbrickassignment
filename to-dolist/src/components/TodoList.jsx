import React, { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task === "") {
      alert("Please write something!");
    } else {
      setTasks([...tasks, { id: Date.now(), name: task }]);
      setTask("");
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateTask = (id, newName) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, name: newName } : task))
    );
  };

  const styles = {
    container: {
      maxWidth: "600px",
      margin: "2rem auto",
      padding: "2rem",
      backgroundColor: "#f9f9f9",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
    },
    title: {
      color: "#ff5722",
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
      backgroundColor: "#ff5722",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "transform 0.3s, background-color 0.3s",
    },
    buttonHover: {
      transform: "scale(1.05)",
      backgroundColor: "#e64a19",
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
      backgroundColor: "#d32f2f",
      border: "none",
      color: "#fff",
      padding: "5px 10px",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
    deleteButtonHover: {
      backgroundColor: "#b71c1c",
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
      <h2 style={styles.title}>To-Do List</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a task"
        style={styles.input}
      />
      <button
        onClick={addTask}
        style={{
          ...styles.button,
          ...(task ? styles.buttonHover : {}),
        }}
      >
        Add
      </button>
      <ul style={styles.list}>
        {tasks.map((task) => (
          <li
            key={task.id}
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
              value={task.name}
              onChange={(e) => updateTask(task.id, e.target.value)}
              style={styles.inputUpdate}
            />
            <button
              onClick={() => deleteTask(task.id)}
              style={{
                ...styles.deleteButton,
                ...(styles.deleteButtonHover ? styles.deleteButtonHover : {}),
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#b71c1c")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#d32f2f")
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

export default TodoList;
