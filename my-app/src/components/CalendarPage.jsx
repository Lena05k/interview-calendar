import React, { useState } from 'react';
import styled from 'styled-components';
import { TableProvider } from './contexts/TableContext';
import Header from './components/Header';
import Week from './components/Week';
import Time from './components/Time';
import Table from './components/Table';
import Footer from './components/Footer';

const CalendarWrapper = styled.div`
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  width: ${props => (props.isMobile ? '100%' : '740px')};
  margin: 0 auto;
`;

const TableWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const Calendar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 740 && !isMobile) {
      setIsMobile(true);
    } else if (window.innerWidth > 740 && isMobile) {
      setIsMobile(false);
    }
  };

  window.addEventListener('resize', handleResize);

  return (
    <CalendarWrapper isMobile={isMobile}>
      <Header />
      <Week isMobile={isMobile} />
      <TableProvider>
        <TableWrapper>
          <Time isMobile={isMobile} />
          <Table isMobile={isMobile} />
        </TableWrapper>
        <Footer />
      </TableProvider>
    </CalendarWrapper>
  );
};

export default Calendar;
