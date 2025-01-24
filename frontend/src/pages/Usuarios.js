import React, { useEffect, useState } from "react";
import api from "../services/api"; 
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import '../styles/customStyles.css'; // Si el archivo está en la carpeta src/styles


const Usuarios = () => {
    const [usuarios, setUsuarios] = useState([]); 
    const [nombre, setNombre] = useState(""); 
    const [apellido, setApellido] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [telefono, setTelefono] = useState(""); 
    const [fechaNacimiento, setFechaNacimiento] = useState(""); 
    const [usuarioEditando, setUsuarioEditando] = useState(null);

    useEffect(() => {
        api.getUsuarios().then(response => setUsuarios(response.data));
    }, []);

    const handleCreate = () => {
        const nuevoUsuario = { nombre, apellido, email, telefono, fechaNacimiento };
        api.createUsuario(nuevoUsuario).then(() => {
            setNombre("");
            setApellido("");
            setEmail("");
            setTelefono("");
            setFechaNacimiento("");
            api.getUsuarios().then(response => setUsuarios(response.data));
        });
    };

    const handleUpdate = () => {
        const usuarioActualizado = { nombre, apellido, email, telefono, fechaNacimiento };
        api.updateUsuario(usuarioEditando.id, usuarioActualizado).then(() => {
            setNombre("");
            setApellido("");
            setEmail("");
            setTelefono("");
            setFechaNacimiento("");
            setUsuarioEditando(null);
            api.getUsuarios().then(response => setUsuarios(response.data));
        });
    };

    const handleDelete = (id) => {
        api.deleteUsuario(id).then(() => {
            api.getUsuarios().then(response => setUsuarios(response.data));
        });
    };

    const handleEdit = (usuario) => {
        setUsuarioEditando(usuario);
        setNombre(usuario.nombre);
        setApellido(usuario.apellido);
        setEmail(usuario.email);
        setTelefono(usuario.telefono);
        setFechaNacimiento(usuario.fechaNacimiento);
    };

    return (
        <div className="container">
            <h1 className="text-center text-purple-800">Gestión de Usuarios</h1>

            <form className="mb-4" onSubmit={e => e.preventDefault()}>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nombre"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Apellido"
                        value={apellido}
                        onChange={e => setApellido(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Teléfono"
                        value={telefono}
                        onChange={e => setTelefono(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="date"
                        className="form-control"
                        value={fechaNacimiento}
                        onChange={e => setFechaNacimiento(e.target.value)}
                    />
                </div>
                <button className="btn btn-info btn-block" onClick={usuarioEditando ? handleUpdate : handleCreate}>
                    {usuarioEditando ? "Actualizar Usuario" : "Crear Usuario"}
                </button>

                {usuarioEditando && (
                    <button className="btn btn-secondary btn-block" onClick={() => setUsuarioEditando(null)}>
                        Cancelar
                    </button>
                )}
            </form>

            <table className="table table-bordered table-striped">
                <thead className="thead-dark bg-purple-700 text-white">
                    <tr>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Teléfono</th>
                        <th>Fecha Nacimiento</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map(usuario => (
                        <tr key={usuario.id}>
                            <td>{usuario.nombre} {usuario.apellido}</td>
                            <td>{usuario.email}</td>
                            <td>{usuario.telefono}</td>
                            <td>{usuario.fechaNacimiento}</td>
                            <td>
                                <button className="btn btn-warning" onClick={() => handleEdit(usuario)}>
                                    <i className="bi bi-pencil"></i>
                                </button>
                                <button className="btn btn-danger" onClick={() => handleDelete(usuario.id)}>
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

export default Usuarios;
