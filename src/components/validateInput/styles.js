import styled from "styled-components";
/**
export const Input = styled.input<React.ChangeEventHandler<HTMLInputElement>>`
  font-size:" small",
  border: "solid 0px",
  font-size:" large",
  border: "solid 0px",
  outline: "none",
  padding: "5px 2px",
`;
*/
export const TitleValidate = styled.label`
  margin-left: 1px;
  color: black;
  position: absolute;
  transition: all 0.25s;
  font-size: ${(props) => (props.onActive ? small : large)};
  transform: ${(props) =>
    props.onActive ? "translateY(0px)" : "translateY(15px)"};
`;

export const InputValidate = styled.input`
  font-size: medium;
  border: solid 0px;
  margin-top: 21px;
  outline: none;
  padding: 5px 2px;
  border: solid 0px;
`;

export const ContainerValidate = styled.div`
  width: 500px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 15px;
  margin-top: 10%;
  background-color: white;
  border: solid 1px gray;
  border-radius: 5px;
  position: relative;
`;

export const LabelValidate = styled.label`
  margin-left: 1px;
  font-size: small;
  color: red;
  visibility: ${(props) => (props.checkValidate ? hidden : visible)};
`;
