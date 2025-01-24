const UsuarioCard = ({ usuario, onDelete, onEdit }) => (
    <div className="card mb-3" style={{ border: '1px solid #6a0dad' }}>
        <div className="card-body">
            <h5 className="card-title text-center">{usuario.nombre}</h5>
            <p className="card-text text-muted">{usuario.email}</p>
            <div className="d-flex justify-content-between">
                <button className="btn btn-warning" onClick={() => onEdit(usuario)}>Editar</button>
                <button className="btn btn-danger" onClick={() => onDelete(usuario.id)}>Eliminar</button>
            </div>
        </div>
    </div>
);

export default UsuarioCard;
