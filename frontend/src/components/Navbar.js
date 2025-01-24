import { Link } from "react-router-dom";

const Navbar = () => (
    <>
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#8e44ad" }}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" style={{ color: "#fff", fontWeight: "bold" }}>
                    Gestión de Cursos y Usuarios
                </Link>
                <div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/usuarios" style={{ color: "#fff", fontWeight: "500" }}>
                                Usuarios
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cursos" style={{ color: "#fff", fontWeight: "500" }}>
                                Cursos
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/matricula" style={{ color: "#fff", fontWeight: "500" }}>
                                Matrícula
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        {/* Mensaje de bienvenida */}
        <div className="text-center mt-3">
            <h2 style={{ color: "#6a2c8b" }}>Bienvenido a mi aplicación</h2>
            <p style={{ color: "#9b59b6", fontSize: "1.2rem" }}>
                Aquí podrás gestionar cursos, usuarios y matrículas de manera sencilla y eficiente.
            </p>
        </div>
    </>
);

export default Navbar;
