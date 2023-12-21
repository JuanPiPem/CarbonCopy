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

const Register = () => {
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    fullname: "",
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
      fullname: "username",
      email: "email",
      password: "password",
    };

    const mustHave = ["fullname", "email", "password"];

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
      .post("http://localhost:3001/users/register", formData)
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
          <Form.Group controlId="fullName">
            <Form.Label></Form.Label>
            <Form.Control
              type="text"
              placeholder="Full Name"
              name="fullname"
              value={formData.fullname}
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
