import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Usuarios from "./pages/Usuarios";
import Cursos from "./pages/Cursos";
import Matricula from "./pages/Matricula";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => (
    <Router>
        <Navbar />
        <Routes>
            <Route path="/usuarios" element={<Usuarios />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/matricula" element={<Matricula />} />
        </Routes>
    </Router>
);

export default App;
