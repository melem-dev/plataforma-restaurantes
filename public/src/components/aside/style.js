import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const AsideLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 20px;
  padding: 4px;
  margin-bottom: 15px;
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }
`;

export const AsideButton = styled.button`
  overflow: hidden;
  padding: 8px 12px;
  background-color: rgba(255, 255, 255, 0.4);
  font-size: 16px;
  border: none;
  outline: none;
  color: white;
  border-radius: 8px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
    font-weight: bold;
    color: #222;
  }
`;

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: "Roboto", sans-serif;
  background-color: orange;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: ${({ open }) => (open ? "270px" : "0px")};
  padding: 20px;
  transition: 150ms;
  overflow: hidden;
  z-index: 2;

  && ${AsideLink},${AsideButton} {
    visibility: ${({ open }) => (open ? "visible" : "hidden")};
  }

  && div:nth-of-type(1) {
    display: flex;
    flex-direction: column;
  }
`;
