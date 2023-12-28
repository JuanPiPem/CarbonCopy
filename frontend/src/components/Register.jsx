import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../styles.scss";
import { ErrorText } from "../styles";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Register = () => {
  const navigate = useNavigate();
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
        Swal.fire({
          title: "User created successfully!",
          text: "Check your email to confirm your account",
          icon: "success",
        });
        if (response.status === 201) {
          console.log(response);
          console.log("succesful registration");
          navigate("/login");
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
          <p style={{ margin: "0" }}>Sign up</p>
        </div>
        <div className="card-bottom">
          <div className="code-user">
            <div style={{ display: "flex", gap: 5, width: "100%" }}>
              <p style={{ color: "#01FF1A" }}>let</p>
              <p>user = {keyO} name:</p>
              <p style={{ color: "#EF88BD" }}>'{formData.fullname}',</p>
            </div>
            <div style={{ display: "flex", gap: 5, width: "100%" }}>
              <p>email:</p>
              <p style={{ color: "#EF88BD" }}>'{formData.email}',</p>
            </div>
            <div style={{ display: "flex", gap: 5, width: "100%" }}>
              <p>password: </p>
              <p style={{ color: "#EF88BD" }}>
                '{pass}'{keyC}
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            {error && <ErrorText>{error}</ErrorText>}
            <Form.Group controlId="fullName">
              <Form.Label></Form.Label>
              <Form.Control
                type="text"
                data-bs-theme="dark"
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
            <div className="button-submit">
              <Button variant="primary" type="submit">
                Sign up
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
