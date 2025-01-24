import axios from "axios";

const apiUsuarios = axios.create({
    baseURL: "http://localhost:8003/api/usuarios",
});

const apiCursos = axios.create({
    baseURL: "http://localhost:8002/api/cursos",
});

// API de usuarios
export const getUsuarios = () => apiUsuarios.get("");
export const createUsuario = (usuario) => apiUsuarios.post("", usuario);
export const deleteUsuario = (id) => apiUsuarios.delete(`/${id}`);
export const updateUsuario = (id, usuario) => apiUsuarios.put(`/${id}`, usuario);

// API de cursos
export const getCursos = () => apiCursos.get("");
export const createCurso = (curso) => apiCursos.post("", curso);
export const deleteCurso = (id) => apiCursos.delete(`/${id}`);
export const updateCurso = (id, curso) => apiCursos.put(`/${id}`, curso);

// Nueva función para obtener los usuarios asociados a un curso
export const obtenerUsuariosPorCurso = (idCurso) => apiCursos.get(`/${idCurso}/usuarios`);

// Exportación por defecto
export default {
    getUsuarios,
    createUsuario,
    deleteUsuario,
    updateUsuario,
    getCursos,
    createCurso,
    deleteCurso,
    updateCurso,
    obtenerUsuariosPorCurso, // Solo esta función aquí
};
