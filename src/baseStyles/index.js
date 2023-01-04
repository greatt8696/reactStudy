import styled from "styled-components";

export const StyledDiv = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: white;
`;

export const Body = styled.body`
  height: 100vh;
  width: 100vw;
  background-color: orange;
`;

export const ButtonBase = styled.button`
  font-family: "mainFont";
  padding: 1rem;
  border-radius: 5px;
  border: solid 1px #1527af;
  font-weight: 700;
  background-color: ${(props) => props.color || "white"};
  color: ${(props) => props.backgroundColor || "#1527af"};
  width: ${(props) => props.width || "auto"};
  &:hover {
    font-family: "mainFont";
    background-color: ${(props) => props.backgroundColor || "#1527af"};
    transition: 0.5s;
    font-weight: bold;
    border: solid 1px ${(props) => props.backgroundColor || "white"};
    color: ${(props) => props.color || "white"};
  }
`;
