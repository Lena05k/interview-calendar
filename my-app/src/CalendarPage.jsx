import React, { useState } from 'react';
import styled from 'styled-components';

const Calendar = styled.div`
  position: relative;
`;
const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${props => (props.isMobile ? '100%' : '740px')};
  margin: 0 auto;  
`;

const HeaderDaysWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
  background: #f6f6f6;
`;

const FooterWrapper = styled.div`
  
`;

const WeekDaysWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
`;

const WeekDay = styled.div`
  width: ${props => (props.isMobile ? 'calc(100% / 7)' : '100px')};
  text-align: center;
`;

const TableWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const TimeColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 80px);
  padding: 10px;
`;

const Time = styled.div`
  height: ${props => (props.isMobile ? 'calc(100% / 24)' : '40px')};
  display: flex;
  align-items: center;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: ${props => (props.isMobile ? '100%' : 'calc(100% - 100px)')};
`;

const TableRow = styled.tr`
  height: 40px;
`;

const TableCell = styled.td`
  border: solid 1px #ccc;
`;

const YearWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const YearButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const Calendar = () => {
  const [currentWeek, setCurrentWeek] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 740 && !isMobile) {
      setIsMobile(true);
    } else if (window.innerWidth > 740 && isMobile) {
      setIsMobile(false);
    }
  };

  const handlePrevWeek = () => {
    setCurrentWeek(currentWeek - 1);
  };

  const handleNextWeek = () => {
    setCurrentWeek(currentWeek + 1);
  };

  window.addEventListener('resize', handleResize);

  return (
    <Calendar>
      <HeaderDaysWrapper>
        <WeekDaysWrapper>
          <WeekDay isMobile={isMobile}>M</WeekDay>
          <WeekDay isMobile={isMobile}>T</WeekDay>
          <WeekDay isMobile={isMobile}>W</WeekDay>
          <WeekDay isMobile={isMobile}>T</WeekDay>
          <WeekDay isMobile={isMobile}>F</WeekDay>
          <WeekDay isMobile={isMobile}>S</WeekDay>
          <WeekDay isMobile={isMobile}>S</WeekDay>
        </WeekDaysWrapper>
        <YearWrapper>
          <YearButton onClick={handlePrevWeek}>{'<'}</YearButton>
          <div>Week {currentWeek}</div>
          <YearButton onClick={handleNextWeek}>{'>'}</YearButton>
        </YearWrapper>
      </HeaderDaysWrapper>
      <CalendarWrapper isMobile={isMobile}>
        <TableWrapper>
          <TimeColumn>
            {[...Array(24)].map((_, index) => (
              <Time key={index} isMobile={isMobile}>
                {index.toString().padStart(2, '0')}:00
              </Time>
            ))}
          </TimeColumn>
          <Table isMobile={isMobile}>
            <tbody>
            {[...Array(24)].map((_, rowIndex) => (
              <TableRow key={rowIndex} isMobile={isMobile}>
                {[...Array(7)].map((_, cellIndex) => (
                  <TableCell key={cellIndex}></TableCell>
                ))}
              </TableRow>
            ))}
            </tbody>
          </Table>
        </TableWrapper>
        <FooterWrapper></FooterWrapper>
      </CalendarWrapper>
    </Calendar>
  );
};

export default Calendar;
