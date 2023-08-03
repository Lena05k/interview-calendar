import React from 'react';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const ModalContent = styled.div`
  background-color: #e6e6e6;
  padding: 20px 0 0 0;
  border-radius: 1.25rem;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextBlock = styled.div`
  text-align: center;
  margin: 0 50px 0 50px;
`;

const TextH3 = styled.h3`
  margin: 5px 0 5px;
`;

const Text = styled.p`
  margin: 5px 0 5px;
`;

const Input = styled.input`
  padding: 5px 10px 5px 10px;
  margin: 10px 20px 0 20px;
`;

const ButtonWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-items: stretch;
  margin-top: 10px;
  border-top: solid 1.5px #9f9fac;
`;

const Button = styled.button`
  margin: 10px 5px 10px 5px;
  background: #e6e6e6;
  border: none;
  color: #007afe;
  font-size: 25px;
  font-weight: 500;
`;

const Modal = ({ isOpen, onCancel, onOk }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <ModalWrapper>
      <ModalContent>
        <TextWrapper>
          <TextBlock>
            <TextH3>https://calendar.com</TextH3>
            <Text>Enter event time:</Text>
            <Text>YYYY-MM_DD HH:mm:ss</Text>
          </TextBlock>
          <Input type="text" />
        </TextWrapper>
        <ButtonWrapper>
          <Button onClick={onCancel}>Cancel</Button>
          <Button onClick={onOk}>OK</Button>
        </ButtonWrapper>
      </ModalContent>
    </ModalWrapper>
  );
};
export default Modal;
