import styled from "styled-components";

export const Modal = styled.div`
  font-family: "Roboto", sans-serif;
`;

export const Overlay = styled.div`
  z-index: 4;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(10, 10, 10, 0.6);
`;

export const Content = styled.div`
  z-index: 5;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - 40px);
  max-width: 500px;
  height: calc(100% - 40px);
  max-height: 480px;
  padding: 20px;
  background-color: white;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

// prettier-ignore
const ButtonColor = ({ confirm }) => confirm ? 'var(--verde)' : 'var(--vermelho)'

export const Button = styled.button`
  margin: 0 7px;
  padding: 8px 14px;
  background-color: ${ButtonColor};
  outline: none;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  filter: brightness(1);
  transition: 150ms;

  &:hover {
    filter: brightness(1.4);
  }
`;

export const List = styled.div`
  width: 100%;
  background-color: rgba(200, 200, 200, 0.1);
  height: 100%;
  margin: 20px 0;
  padding: 10px;
  overflow: auto;

  & p {
    font-size: 16px;
    line-height: 2rem;
  }
`;

export const IconExit = styled.p`
  font-size: 30px;
  color: rgba(100, 100, 100, 1);
  position: absolute;
  transform: scale(1);
  padding: 8px;
  cursor: default;
  right: 10px;
  top: 5px;
  z-index: 9999;
  transition: 150ms;

  &:hover {
    transform: scale(1.2);
    color: black;
  }
`;

export const ListItem = styled.div`
  margin-bottom: 20px;
  border-bottom: 1px solid rgba(200, 200, 200, 0.5);

  && strong {
    margin-left: 10px;
  }
`;
