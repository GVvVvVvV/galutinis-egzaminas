import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;

  margin-top: 2em;
  width: 100%;
  max-width: 700px;
  height: auto;
  background-color: #eaf7ff;
  box-shadow: 0px 3px 8px 7px #e1e1e1;

  border-radius: 20px;

  h1 {
    color: rgb(102, 102, 102);
  }
  label {
    color: dark-gray;
  }
  div {
    display: flex;
    flex-direction: column;
  }
  .btn-wrapper {
    display: flex;
    align-items: center;
  }
  .submitButton {
    max-width: 80px;
    margin: 10px 10px 10px 10px;
    padding: 5px 10px 5px 10px;
    border: 1px solid #1e2738;
    border-radius: 10px;
    background-color: #ffff;
  }
  .submitButton:hover {
    cursor: pointer;
    border: 1px solid;
    box-shadow: 0px 0px 0.1px 0.5px;
  }
  input {
    border-radius: 10px;
    padding: 5px 10px 5px 10px;
  }
  select {
    border-radius: 10px;
    padding: 5px 10px 5px 10px;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  justify-content: center;
`;
