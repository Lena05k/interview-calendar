import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const HeaderText = styled.div`
  font-size: 30px;
  margin-left: 30px;
`;

const Button = styled.button`
  display: inline-block;
  padding: 5px 10px;
  margin-right: 30px;
  font-size: 30px;
  background: white;
  color: #fe3332;
  border: none;
  cursor: pointer;
`;

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <HeaderWrapper>
      <HeaderText>
        <p>Interview Calendar</p>
      </HeaderText>
      <Button onClick={handleOpenModal}>{'+'}</Button>
      <Modal isOpen={isModalOpen} onCancel={handleCloseModal} onOk={handleCloseModal} />
    </HeaderWrapper>
  );
};

export default Header;
