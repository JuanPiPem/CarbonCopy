// En tu archivo styles.jsx
import styled from "styled-components";

export const RegisterContainer = styled.div`
  background: #0047ff;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
`;

export const FormContainer = styled.div`
  width: 65%;
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
