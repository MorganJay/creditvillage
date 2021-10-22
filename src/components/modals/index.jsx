import React from "react";
import { HeadingOne, Image, ModalWrapper, Paragraph, StyledLink } from "components/styled";

const Modal = ({
  icon,
  heading,
  subheading,
  text,
  path,
  showButton,
  buttonText,
  onClose,
}) => {
  return (
    <ModalWrapper className="wrapper" onClick={onClose}>
      <ModalWrapper className="content">
        <Image src={icon} alt="" className="modal-img" />
        <ModalWrapper className="body">
          <HeadingOne className="modal-heading">{heading}</HeadingOne>
          <HeadingOne className="modal-heading">{subheading}</HeadingOne>
          <Paragraph>{text}</Paragraph>
        </ModalWrapper>
        <ModalWrapper>
          {showButton && (
            <StyledLink className="modal-btn" to={path} onClick={onClose}>
              {buttonText}
            </StyledLink>
          )}
        </ModalWrapper>
      </ModalWrapper>
    </ModalWrapper>
  );
};

export default Modal;
