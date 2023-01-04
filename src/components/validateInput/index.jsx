import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { StyledDiv } from "../../baseStyles";
import { checkBlank } from "./model";
import {
  ContainerValidate,
  InputValidate,
  TitleValidate,
  LabelValidate,
} from "./styles";

const ValidateInput = ({
  title,
  setValuefromParent,
  validateCallback,
  errorLabel,
}) => {
  const [value, setValue] = useState("");
  const [pass, setPass] = useState(false);
  const [onActive, setOnActive] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
    setValuefromParent(e.target.value);
  };

  const handleFocus = () => setOnActive(true);
  const handleBlur = () => {
    if (!!value) return;
    setOnActive(false);
  };

  useEffect(() => {
    const validateResults = validateCallback.reduce(
      (prev, curr) => (curr(value) ? prev.concat(curr(value)) : prev),
      [],
    );
    if (!validateResults.length && validateResults.every((result) => result))
      setPass(false);
    else setPass(true);
  }, [value]);

  return (
    <ContainerValidate onFocus={handleFocus} onBlur={handleBlur}>
      <TitleValidate onActive={onActive}>{title}</TitleValidate>
      <InputValidate onChange={handleChange}></InputValidate>
      <LabelValidate checkValidate={pass}>{errorLabel}</LabelValidate>
    </ContainerValidate>
  );
};

export default ValidateInput;
