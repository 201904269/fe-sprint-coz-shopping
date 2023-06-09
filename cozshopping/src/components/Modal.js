import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./Modal.css";

const Modal = ({
  imageUrl,
  modalClose,
  title,
  handleBookmark,
  isBookmarked,
}) => {
  const handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      modalClose();
    }
  };

  const handleModalBookmark = () => {
    handleBookmark();
  };

  return (
    <div className="overlay" onClick={handleOverlayClick}>
      <div className="modal">
        <FontAwesomeIcon
          className="close"
          icon={faXmark}
          size="lg"
          color="white"
          onClick={modalClose}
        />
        <img className="img" src={imageUrl} alt="modalImg" />
        <span className="title">{title}</span>
        <FontAwesomeIcon
          className={isBookmarked ? "bookcolor" : "bookmark"}
          size="lg"
          icon={faStar}
          onClick={handleModalBookmark}
        />
      </div>
    </div>
  );
};

export default Modal;