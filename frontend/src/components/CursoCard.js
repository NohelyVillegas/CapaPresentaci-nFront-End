// src/components/CursoCard.js

const CursoCard = ({ curso, onDelete, onEdit }) => (
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">{curso.nombre}</h5>
            <p className="card-text">{curso.descripcion}</p>
            <p className="card-text">Créditos: {curso.creditos}</p>
            <button className="btn btn-danger" onClick={() => onDelete(curso.id)}>Eliminar</button>
            <button className="btn btn-primary" onClick={() => onEdit(curso)}>Editar</button>
        </div>
    </div>
);

export default CursoCard;
