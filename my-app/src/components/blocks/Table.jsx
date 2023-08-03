import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { TableContext } from '../contexts/TableContext';

const TableBlock = styled.table`
  border-collapse: collapse;
  width: ${props => (props.isMobile ? '100%' : 'calc(100% - 50px)')};
  margin-bottom: 10px;
`;

const TableRow = styled.tr`
  height: 40px;
`;

const TableCell = () => {
  const { setIsDeleteVisible } = useContext(TableContext);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    setIsDeleteVisible(!isClicked);
  };

  return (
    <StyledTableCell onClick={handleClick} isClicked={isClicked} />
  );
};

const StyledTableCell = styled.td`
  background-color: ${({ isClicked }) => (isClicked ? '#ebecff' : '#fff')};
  border: solid 1.5px #e6e6e6;
  border-top: none;
`;

const Table = ({ isMobile }) => (
  <TableBlock isMobile={isMobile}>
    <tbody>
    {[...Array(24)].map((rowIndex) => (
      <TableRow key={rowIndex} isMobile={isMobile}>
        {[...Array(7)].map((cellIndex) => (
          <TableCell key={cellIndex} />
        ))}
      </TableRow>
    ))}
    </tbody>
  </TableBlock>
);

export default Table;
