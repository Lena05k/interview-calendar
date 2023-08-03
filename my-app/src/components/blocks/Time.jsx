import React from 'react';
import styled from 'styled-components';

const TimeColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 80px);
  padding: 0 10px;
  margin-top: 30px;
`;

const TimePeriod = styled.div`
  color: #c0c0c0;
  padding-top: 10px;
`;

const Time = ({ isMobile }) => (
  <TimeColumn>
    {[...Array(24)].map((_, index) => (
      <TimePeriod key={index} isMobile={isMobile}>
        {index.toString().padStart(2, '0')}
        :00
      </TimePeriod>
    ))}
  </TimeColumn>
);

export default Time;
