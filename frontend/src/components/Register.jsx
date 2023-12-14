import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";

const RegisterContainer = styled.div`
  background: #0047ff;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
`;

const FormContainer = styled.div`
  width: 65%;
  padding: 20px;
  background: ligth blue;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  color: white;
  text-align: center;
`;

const ErrorText = styled.p`
  color: white;
  font-weight: bold;
`;

const StyledForm = styled(Form)`
  & .form-control {
    border-radius: 40px;
    background-color: rgba(13, 110, 253, 0.51);
    font-family: "Poppins", sans-serif;
    border: 1px solid #ffffff;
    margin-bottom: 3px;
  }

  & .form-control::placeholder {
    color: #ffffff;
    opacity: 1;
  }

  & .btn-primary {
    border-radius: 40px;
    background-color: rgba(13, 110, 253, 0.51);
    color: #fffff;
    font-family: "Poppins", sans-serif;
    border: 1px solid #ffffff;
    float: right;
  }
`;

const Register = () => {
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    const frontNames = {
      fullName: "username",
      email: "email",
      password: "password",
    };

    const mustHave = ["fullName", "email", "password"];

    const missing = mustHave.filter((e) => !formData[e]);

    if (missing.length > 0) {
      const message =
        missing.length === 1
          ? `Complete the fields ${frontNames[missing[0]]}.`
          : `Complete the fields ${missing
              .slice(0, -1)
              .map((e) => ` ${frontNames[e]}`)
              .join(",")}${missing.length > 1 ? " and" : ""} ${
              frontNames[missing[missing.length - 1]]
            }
      `;
      console.log(message);
      setError(message);
      return;
    }

    // Aquí puedes agregar la lógica para manejar el envío del formulario
    console.log("Formulario enviado:", formData);
  };

  return (
    <RegisterContainer>
      <FormContainer style={{ backgroundColor: "rgb(13, 110, 253, 51%)" }}>
        <hr />
        <Title>Carbon Copy</Title>

        <p>Give style to your code</p>

        {error && <ErrorText>{error}</ErrorText>}

        <StyledForm onSubmit={handleSubmit}>
          <Form.Group controlId="fullName">
            <Form.Label></Form.Label>
            <Form.Control
              type="text"
              placeholder="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label></Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label></Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </Form.Group>

          <div style={{ marginBottom: "1rem" }} />

          <Button variant="primary" type="submit">
            Sign up
          </Button>
        </StyledForm>
      </FormContainer>
    </RegisterContainer>
  );
};

export default Register;