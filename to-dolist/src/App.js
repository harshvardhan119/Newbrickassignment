import React from "react";
import TodoList from "./components/TodoList";
import Employee from "./components/Employee";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";


function App() {
  return (
  
  <BrowserRouter>
  <Routes>
    <Route path="/todolist" element={<TodoList/>} />
    <Route path="/employee" element={<Employee/>} />
  </Routes>
  </BrowserRouter>
  
  );
}

export default App;
