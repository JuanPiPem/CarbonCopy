import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  background: #0047ff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
`;

const Header = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 50px;
`;

const Title = styled.h1`
  color: white;
`;

const Subtitle = styled.p`
  color: white;
  margin-top: 20px;
`;

const Navbar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
`;

const ScrollDown = styled.select`
  width: 30%;
  padding: 10px;
  border-radius: 5px;
  // Agrega otros estilos según tus necesidades
`;

const ColorPicker = styled.select`
  width: 10%;
  padding: 10px;
  border-radius: 5px;
  // Agrega otros estilos según tus necesidades
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 20px;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  background: #ffffff;
  margin-left: 10px;
  // Agrega otros estilos según tus necesidades
`;

const BoardContainer = styled.div`
  width: 100%;
  height: 50%;
  border: 2px solid white;
  margin-top: 20px;
`;

const Home = () => {
  return (
    <MainContainer>
      <Header>
        <Title>Copy Carbon</Title>
        <Subtitle>Give style to your code</Subtitle>
      </Header>
      <Navbar>
        <ScrollDown>{/* Opciones del scroll down */}</ScrollDown>
        <ScrollDown>{/* Opciones del scroll down */}</ScrollDown>
        <ColorPicker>{/* Opciones del color picker */}</ColorPicker>
        <IconsContainer>
          <Icon>{/* Icono para downloads */}</Icon>
          <Icon>{/* Icono para favoritos */}</Icon>
          <Icon>{/* Icono para dark mode */}</Icon>
          <Icon>{/* Icono para perfil de usuario */}</Icon>
        </IconsContainer>
      </Navbar>
      <BoardContainer>
        {/* Aquí puedes implementar el componente para escribir código */}
      </BoardContainer>
    </MainContainer>
  );
};

export default Home;
