import styled from "styled-components";

export const SideBarContainer = styled.div`
  width: 280px;
  height: 100%;
  background-color: #ff00006e;
  position: fixed;
  top: 0px;
  right: 0px;
  z-index: 1000;
  transition: all 0.25s ease-in-out;
  transform: ${(props) =>
    props.isActive ? "translateX(0px)" : "translateX(300px)"};
`;
