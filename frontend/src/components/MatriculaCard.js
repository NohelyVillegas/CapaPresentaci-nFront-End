import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";

const MatriculaCard = ({ usuario, cursoId, onDesmatricular }) => {
  const { id, nombre, apellido, email } = usuario;

  const handleDesmatricular = () => {
    onDesmatricular(cursoId, id);
  };

  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body>
        <Card.Title>
          {nombre} {apellido}
        </Card.Title>
        <Card.Text>
          <strong>Email:</strong> {email}
        </Card.Text>
        <Button variant="danger" onClick={handleDesmatricular}>
          Desmatricular
        </Button>
      </Card.Body>
    </Card>
  );
};

MatriculaCard.propTypes = {
  usuario: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    apellido: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  cursoId: PropTypes.number.isRequired,
  onDesmatricular: PropTypes.func.isRequired,
};

export default MatriculaCard;
