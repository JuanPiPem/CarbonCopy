import React from "react";
import { Dropdown, InputGroup } from "react-bootstrap";
import {
  RegisterContainer,
  FormContainer,
  Title,
  StyledDropdown,
  LargeInput,
} from "../styles";

const Home = () => {
  return (
    <RegisterContainer>
      <FormContainer style={{ backgroundColor: "rgb(13, 110, 253, 51%)" }}>
        <hr />
        <Title>Carbon Copy</Title>

        <p>Give style to your code</p>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {/* Dropdowns */}
          <div style={{ display: "flex" }}>
            <StyledDropdown>
              <Dropdown>
                <Dropdown.Toggle variant="primary" id="style-dropdown">
                  Style
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Action</Dropdown.Item>
                  <Dropdown.Item>Another action</Dropdown.Item>
                  <Dropdown.Item>Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </StyledDropdown>

            <StyledDropdown>
              <Dropdown>
                <Dropdown.Toggle variant="primary" id="style-dropdown">
                  Format
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Action</Dropdown.Item>
                  <Dropdown.Item>Another action</Dropdown.Item>
                  <Dropdown.Item>Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </StyledDropdown>

            <StyledDropdown style={{ fontSize: "14px" }}>
              <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
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

        {/* Input grande */}
        <InputGroup className="mb-3">
          <LargeInput
            placeholder="Large input"
            aria-label="Large input"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
      </FormContainer>
    </RegisterContainer>
  );
};

export default Home;
