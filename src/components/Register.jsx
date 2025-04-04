import React, { useState } from "react";
import { Form, Button, Container, Card, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    tipoDoc: "",
    numeroDoc: "",
    direccion: "",
    contrasena: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Asignar rol fijo "cliente" con ID 2 (ajústalo según tu base de datos)
    const dataToSend = {
      ...formData,
      idRol: 2,
    };

    try {
        const response = await fetch("http://localhost:8074/api/usuario/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Registro exitoso. Ahora puedes iniciar sesión.");
        setTimeout(() => navigate("/login"), 2000);
      } else {
        setError(data.message || "Error al registrar usuario.");
      }
    } catch (err) {
      setError("No se pudo conectar con el servidor.");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: "500px" }} className="p-4 shadow">
        <Card.Title className="text-center mb-4">Registro de Usuario</Card.Title>

        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">{success}</Alert>}

        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Correo</Form.Label>
            <Form.Control
              type="email"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control
              type="text"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Tipo de Documento</Form.Label>
            <Form.Control
              as="select"
              name="tipoDoc"
              value={formData.tipoDoc}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona un tipo</option>
              <option value="CC">Cédula de Ciudadanía</option>
              <option value="CE">Cédula de Extranjería</option>
              <option value="TI">Tarjeta de Identidad</option>
            </Form.Control>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Número de Documento</Form.Label>
            <Form.Control
              type="text"
              name="numeroDoc"
              value={formData.numeroDoc}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Dirección</Form.Label>
            <Form.Control
              type="text"
              name="direccion"
              value={formData.direccion}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              name="contrasena"
              value={formData.contrasena}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Registrarse
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default Register;
