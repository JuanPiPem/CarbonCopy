import styled from "styled-components";
import { FormControl } from "react-bootstrap";

export const RegisterContainer = styled.div`
  background: #0047ff;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
`;

export const FormContainer = styled.div`
  width: 55%;
  padding: 20px;
  background: lightblue;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const StyledForm = styled.form`
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

export const Title = styled.h1`
  color: white;
  text-align: center;
`;

export const ErrorText = styled.p`
  color: white;
  font-weight: bold;
`;

export const HomeContainer = styled.div`
  background: #0047ff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
`;

export const HomeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
`;

export const HomeTitle = styled.h1`
  color: white;
  text-align: center;
  margin-bottom: 5px;
`;

export const HomeSubtitle = styled.p`
  color: white;
  text-align: center;
  font-size: 14px;
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const StyledDropdown = styled.div`
  & .btn-primary {
    border-radius: 40px;
    background-color: rgba(13, 110, 253, 0.51);
    color: #ffffff;
    font-family: "Poppins", sans-serif;
    border: 1px solid #ffffff;
    margin-right: 10px;
  }
`;

export const LargeInput = styled(FormControl)`
  border-radius: 40px;
  background-color: rgba(13, 110, 253, 0.51);
  font-family: "Poppins", sans-serif;
  border: 1px solid #ffffff;
`;
