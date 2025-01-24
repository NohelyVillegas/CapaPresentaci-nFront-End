import React, { useEffect, useState } from "react";
import api from "../services/api"; 
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import '../styles/customStyles.css'; // Si el archivo está en la carpeta src/styles


const Cursos = () => {
    const [cursos, setCursos] = useState([]); 
    const [nombre, setNombre] = useState(""); 
    const [descripcion, setDescripcion] = useState(""); 
    const [creditos, setCreditos] = useState(0); 
    const [cursoEditando, setCursoEditando] = useState(null);

    useEffect(() => {
        api.getCursos().then(response => setCursos(response.data));
    }, []);

    const handleCreate = () => {
        const nuevoCurso = { nombre, descripcion, creditos };
        api.createCurso(nuevoCurso).then(() => {
            setNombre("");
            setDescripcion("");
            setCreditos(0);
            api.getCursos().then(response => setCursos(response.data));
        });
    };

    const handleUpdate = () => {
        const cursoActualizado = { nombre, descripcion, creditos };
        api.updateCurso(cursoEditando.id, cursoActualizado).then(() => {
            setNombre("");
            setDescripcion("");
            setCreditos(0);
            setCursoEditando(null);
            api.getCursos().then(response => setCursos(response.data));
        });
    };

    const handleDelete = (id) => {
        api.deleteCurso(id).then(() => {
            api.getCursos().then(response => setCursos(response.data));
        });
    };

    const handleEdit = (curso) => {
        setCursoEditando(curso);
        setNombre(curso.nombre);
        setDescripcion(curso.descripcion);
        setCreditos(curso.creditos);
    };

    return (
        <div className="container">
            <h1 className="text-center text-purple-800">Gestión de Cursos</h1>

            <form className="mb-4" onSubmit={e => e.preventDefault()}>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nombre del curso"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <textarea
                        className="form-control"
                        placeholder="Descripción del curso"
                        value={descripcion}
                        onChange={e => setDescripcion(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Créditos"
                        value={creditos}
                        onChange={e => setCreditos(Number(e.target.value))}
                    />
                </div>
                <button className="btn btn-info btn-block" onClick={cursoEditando ? handleUpdate : handleCreate}>
                    {cursoEditando ? "Actualizar Curso" : "Crear Curso"}
                </button>
                {cursoEditando && (
                    <button className="btn btn-secondary btn-block" onClick={() => setCursoEditando(null)}>
                        Cancelar
                    </button>
                )}
            </form>

            <table className="table table-bordered table-striped">
                <thead className="thead-dark bg-purple-700 text-white">
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Créditos</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {cursos.map(curso => (
                        <tr key={curso.id}>
                            <td>{curso.nombre}</td>
                            <td>{curso.descripcion}</td>
                            <td>{curso.creditos}</td>
                            <td>
                                <button className="btn btn-warning" onClick={() => handleEdit(curso)}>
                                    <i className="bi bi-pencil"></i>
                                </button>
                                <button className="btn btn-danger" onClick={() => handleDelete(curso.id)}>
                                    <i className="bi bi-trash"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Cursos;
