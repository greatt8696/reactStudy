import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  offSideBar,
  onSideBar,
  selectSideBar,
  switchSideBar,
} from "../../store/reducers/layoutReducer";
import { SideBarContainer } from "./styles";

const SideBar = () => {
  const onSideBarSelector = useSelector(selectSideBar);
  const dispatch = useDispatch();
  return (
    <>
      <SideBarContainer isActive={onSideBarSelector}>
        SideBar
        <button onClick={() => dispatch(switchSideBar())}>닫기버틍</button>
      </SideBarContainer>
    </>
  );
};

export default SideBar;
