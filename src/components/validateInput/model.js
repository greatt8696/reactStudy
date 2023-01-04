import { ATLEAST_8_CHAR } from "../../constances";

export const checkblank = (input) => {
  if (!!input) return true;
  return false;
};

export const checkAtLeastLength = (input, atLeastLength = ATLEAST_8_CHAR) => {
  if (input.length < atLeastLength) return false;
  return true;
};

//const regex = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/;

export const checkAlphabetOrNumber = (input) => {
  const alphabetOrNumberRegex = /^[a-z|A-Z|0-9|]+$/;
  if (alphabetOrNumberRegex.test(input)) return true;
  return false;
};

export const checkEmail = (input) => {
  const emailRegex =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  if (emailRegex.test(input)) return true;
  return false;
  // return emailRegex.test(input) ? true : false;
};

export const checkSpecial = (input) => {
  const emailRegex =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  if (emailRegex.test(input)) return true;
  return false;
  // return emailRegex.test(input) ? true : false;
};

export const checkPhoneNumber = (input) => {
  const cellPhoneRegex = /^[a-z|A-Z|0-9|]+$/;
  const telephoneRegex = /^\d{2,3}-\d{3,4}-\d{4}$/;
  if (cellPhoneRegex.test(input) || telephoneRegex.test(input)) return true;
  return false;
};
