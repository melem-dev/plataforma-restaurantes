import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  font-family: "Roboto", sans-serif;
  color: #555;
`;

export const Box = styled.div`
  background-color: white;
  padding: 20px;
  margin: 20px 0;
  width: 100%;
  max-width: 600px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  max-width: 200px;
  padding: 6px 14px;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  background-color: orange;
  border: none;
  outline: none;
  padding: 4px 16px;
  font-weight: bold;
  width: 100%;
  max-width: 200px;
`;

export const UserDataLine = styled.p``;

export const UserData = styled.div`
  margin-bottom: 20px;
`;
