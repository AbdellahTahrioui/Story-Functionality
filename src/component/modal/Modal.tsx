import React from "react";
import "./Modal.css";
import { Post } from "../../models/post/Post";


interface Props {
  post?: Post;
  onClose: Function;
}

export default function Modal({ onClose, post }: Props) {
  function onClickModal(element: EventTarget) {
    if ((element as HTMLElement).className === "modal-container") onClose();
  }

  return (
    <div onClick={(e) => onClickModal(e.target)} className="modal-container">
    
    </div>
  )
}
