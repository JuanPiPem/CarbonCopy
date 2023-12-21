import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import {
  RegisterContainer,
  FormContainer,
  StyledForm,
  Title,
  ErrorText,
} from "../styles";
import axios from "axios";

const Login = () => {
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
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
      email: "email",
      password: "password",
    };

    const mustHave = ["email", "password"];

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
    axios
      .post("http://localhost:3001/users/login", formData, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.status === 201) {
          console.log(response);
          console.log("succesful registration");
        }
      })
      .catch((error) => {
        console.error("Error registering user:", error);
      });

    console.log(formData);
  };

  return (
    <RegisterContainer>
      <FormContainer style={{ backgroundColor: "rgb(13, 110, 253, 51%)" }}>
        <hr />
        <Title>Carbon Copy</Title>

        <p>Give style to your code</p>

        {error && <ErrorText>{error}</ErrorText>}

        <StyledForm onSubmit={handleSubmit}>
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
            Log In
          </Button>
        </StyledForm>
      </FormContainer>
    </RegisterContainer>
  );
};

export default Login;
