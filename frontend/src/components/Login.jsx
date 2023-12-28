import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../styles.scss";
import { ErrorText } from "../styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
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
        if (response.status === 200) {
          console.log(response);
          console.log("succesful registration");
          navigate("/home");
        }
      })
      .catch((error) => {
        console.error("Error registering user:", error);
      });

    console.log(formData);
  };
  let keyO = "{";
  let keyC = "}";
  const [pass, setPass] = useState("");
  useEffect(() => {
    let numbPass = formData.password.length;
    setPass("*".repeat(numbPass));
  }, [formData.password]);

  return (
    <div className="background">
      <div className="card">
        <div className="card-top">
          <h1>Carbon Copy</h1>
          <h3>Give style to your code</h3>
        </div>
        <div className="page">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="9"
            viewBox="0 0 42 9"
            fill="none"
          >
            <circle cx="4.5" cy="4.5" r="3" stroke="white" />
            <circle cx="21" cy="4.5" r="3" stroke="white" />
            <circle cx="37.5" cy="4.5" r="3" stroke="white" />
          </svg>
          <p style={{ margin: "0" }}>Login</p>
        </div>
        <div className="card-bottom">
          <div className="code-user">
            <div style={{ display: "flex", gap: 5, width: "100%" }}>
              <p style={{ color: "#01FF1A" }}>let</p>
              <p>user = {keyO}</p>
            </div>
            <div style={{ display: "flex", gap: 5, width: "100%" }}>
              <p>email:</p>
              <p style={{ color: "#EF88BD" }}>'{formData.email}',</p>
            </div>
            <div style={{ display: "flex", gap: 5, width: "100%" }}>
              <p>password: </p>
              <p style={{ color: "#EF88BD" }}>'{pass}'</p>
              <p>{keyC}</p>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            {error && <ErrorText>{error}</ErrorText>}
            <Form.Group controlId="email">
              <Form.Label></Form.Label>
              <Form.Control
                type="email"
                data-bs-theme="dark"
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
                data-bs-theme="dark"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </Form.Group>
            <div
              className="button-submit"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <p style={{ color: "#EF88BD" }}>forgot your password</p>
              <Button variant="primary" type="submit">
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
