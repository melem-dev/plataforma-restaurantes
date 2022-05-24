import styled from "styled-components";

export const DataContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  margin-top: 20px;
  font-family: "Roboto", sans-serif;
`;

export const DataCard = styled.div`
  border-radius: 4px;
  margin: 0 auto;
  padding: 8px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  position: relative;
`;

export const DataButton = styled.button`
  padding: 8px 14px;
  color: white;
  background-color: ${({ disabled }) => (disabled ? "#ccc" : "orange")};
  border: none;
  outline: none;
  border-radius: 4px;
  font-weight: bold;
`;

export const DataTitle = styled.p`
  font-size: 20px;
  text-align: center;
  margin-bottom: 20px;
`;

export const DataInfo = styled.p`
  font-size: 16px;
  opacity: ${({ small }) => (small ? 0.5 : 1)};
  margin-bottom: 16px;
`;

export const DataIconExit = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 20px;
  opacity: 0.3;
  transition: 150ms;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

export const DataGrid = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ContainerTitle = styled.h1`
  color: white;
  font-family: "Roboto", sans-serif;
  margin: 25px 0;
`;

export const CardPlate = styled.div`
  width: 100%;
  background-color: white;
  font-family: "Roboto", sans-serif;
  border-radius: 4px;
  padding: 20px;
`;

const colors = {
  pendent: "amarelo",
  confirmed: "verde",
  cancelado: "cinza",
};

export const OrderBorderDetails = styled.div`
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.4);
  padding: 10px;
  margin: 20px 0;
`;

export const OrderContainer = styled.div`
  font-family: "Roboto", sans-serif;
  background-color: ${({ status }) => `var(--${colors[status]})`};
  margin-bottom: 8px;
  border-radius: 8px;
  padding: 20px;
  overflow: hidden;
  transition: 150ms;
  position: relative;
  height: ${({ opened }) => (opened ? "354px" : "114px")};

  && ${OrderBorderDetails} {
    overflow: auto;
    opacity: ${({ opened }) => (opened ? "1" : "0")};
    display: ${({ opened }) => (opened ? "flex" : "none")};
    max-height: 200px;
  }
`;

export const OrderButton = styled.button`
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
  outline: none;
  border: none;
  border-radius: 8px;
  padding: 8px 14px;
  background-color: white;
  font-weight: bold;
  color: #222;
`;

export const OrderTitle = styled.div`
  display: flex;

  && p {
    margin-right: 20px;
  }
`;
