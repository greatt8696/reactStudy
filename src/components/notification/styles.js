import styled from "styled-components";

export const ContainerNotification = styled.div`
  width: 100%;
  height: 180px;
  background-color: #33ff005b;
  position: fixed;
  top: 0px;
  right: 0px;
  z-index: 1000;
  transition: all 0.25s ease-in-out;
  transform: ${(props) =>
    props.isActive ? "translateY(0px)" : "translateY(-300px)"};
`;
