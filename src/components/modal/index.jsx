import { CreditButton } from 'components/buttons/Button';
import React from 'react';
import { HeadingTwo, ModalWrapper, Paragraph } from 'styled';

const Modal = ({ Icon, heading, paragaraph, path, showButton }) => {
  return (
    <ModalWrapper>
      <ModalWrapper className='content'>
        <Icon />
      </ModalWrapper>
      <ModalWrapper className='body'>
        <HeadingTwo>{heading}</HeadingTwo>
        <Paragraph>{paragaraph}</Paragraph>

      </ModalWrapper>
      <ModalWrapper>
          {showButton && <CreditButton/>}
      </ModalWrapper>
    </ModalWrapper>
  );
};

export default Modal;
