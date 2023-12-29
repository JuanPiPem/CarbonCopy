import React from "react";
import { Dropdown, Form } from "react-bootstrap";
import { StyledDropdown } from "../styles";

const Home = () => {
  return (
    <div className="background">
      <div className="card">
        <div className="card-top">
          <h1>Carbon Copy</h1>
          <h3>Give style to your code</h3>
        </div>

        <div className="dropdowns">
          <div style={{ display: "flex" }}>
            <StyledDropdown>
              <Dropdown>
                <Dropdown.Toggle
                  size="sm"
                  variant="primary"
                  id="style-dropdown"
                >
                  Style
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Style 1</Dropdown.Item>
                  <Dropdown.Item>Style 2</Dropdown.Item>
                  <Dropdown.Item>Style 3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </StyledDropdown>

            <StyledDropdown>
              <Dropdown>
                <Dropdown.Toggle
                  size="sm"
                  variant="primary"
                  id="style-dropdown"
                >
                  Format
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Format 1</Dropdown.Item>
                  <Dropdown.Item>Format 2</Dropdown.Item>
                  <Dropdown.Item>Format 3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </StyledDropdown>

            <StyledDropdown style={{ fontSize: "14px" }}>
              <Dropdown>
                <Dropdown.Toggle
                  size="sm"
                  variant="primary"
                  id="dropdown-basic"
                >
                  Color
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Action</Dropdown.Item>
                  <Dropdown.Item>Another action</Dropdown.Item>
                  <Dropdown.Item>Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </StyledDropdown>
          </div>

          {/* Iconos */}
          <div style={{ display: "flex", gap: "10px" }}>
            <i className="fas fa-sun">1</i> {/* Ícono para Dark Mode */}
            <i className="fas fa-heart">2</i> {/* Ícono para Favoritos */}
            <i className="fas fa-user">3</i> {/* Ícono para Perfil */}
            <i className="fas fa-download">4</i> {/* Ícono para Descargar */}
          </div>
        </div>
      </div>

      {/* Input grande */}
      <div className="input-code">
        <form>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="10"
            viewBox="0 0 50 10"
            fill="none"
          >
            <circle cx="5" cy="5" r="5" fill="#F54141" />
            <circle cx="25" cy="5" r="5" fill="#FFB800" />
            <circle cx="45" cy="5" r="5" fill="#01FF1A" />
          </svg>
          <Form.Control
            type="text"
            data-bs-theme="dark"
            name="code"
            // value={code}
            // onChange={handleChange}
          />
        </form>
      </div>
    </div>
  );
};

export default Home;
