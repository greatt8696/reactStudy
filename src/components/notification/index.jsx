import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  offNotificate,
  onNotificate,
  selectNotificate,
  selectSideBar,
} from "../../store/reducers/layoutReducer";
import { ContainerNotification } from "./styles";

const Notification = () => {
  const onNotificateSelector = useSelector(selectNotificate);
  const dispatch = useDispatch();

  return (
    <ContainerNotification isActive={onNotificateSelector}>
      Notification
      <button onClick={() => dispatch(onNotificate())}>공지사항 열기</button>
      <button onClick={() => dispatch(offNotificate())}>공지사항 닫기</button>
    </ContainerNotification>
  );
};

export default Notification;
