import React, { useContext } from 'react';
import styled from 'styled-components';
import { TableContext } from '../../contexts/TableContext';

const FooterWrapper = styled.div`
  position: sticky;
  background: #f6f6f6;
  width: 100%;
  bottom: 0;
  height: 50px;
  z-index: 1;
  padding: 10px 0 10px 0;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px 0 30px;
`;

const Button = styled.button`
  font-size: 20px;
  color: #fe3332;
  background: #f6f6f6;
  border: none;
`;

const Footer = () => {
  const { isDeleteVisible } = useContext(TableContext);

  return (
    <FooterWrapper>
      <ButtonWrapper>
        <Button>Today</Button>
        {isDeleteVisible && <Button>Delete</Button>}
      </ButtonWrapper>
    </FooterWrapper>
  );
};

export default Footer;
