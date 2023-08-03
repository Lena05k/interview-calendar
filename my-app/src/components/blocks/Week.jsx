import React from 'react';
import styled from 'styled-components';

const HeaderDaysWrapper = styled.div`
  position: sticky;
  background: #f6f6f6;
  width: 100%;
  top: 0;
  z-index: 1;
`;

const WeekDaysWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: ${props => (props.isMobile ? '100%' : 'calc(100% - 50px)')};
  padding: 10px 0 0;
  margin: 0 50px 0 52px;
`;

const DaysWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: ${props => (props.isMobile ? '100%' : 'calc(100% - 50px)')};
  padding: 10px 0 0;
  margin: 0 50px 0 52px;
`;

const WeekDay = styled.div`
  width: ${props => (props.isMobile ? 'calc(100% / 7)' : '90px')};
  text-align: center;
  font-size: 20px;
  display: flex;
  justify-content: center;
`;

const MonthWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  padding-top: 10px;
  margin: 0 37px 10px 95px;
`;

const MonthButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: #fe3332;
`;

const Week = ({isMobile}) => (
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
    <DaysWrapper>
      <WeekDay>25</WeekDay>
      <WeekDay>26</WeekDay>
      <WeekDay>27</WeekDay>
      <WeekDay>28</WeekDay>
      <WeekDay>29</WeekDay>
      <WeekDay>30</WeekDay>
      <WeekDay>31</WeekDay>
    </DaysWrapper>
    <MonthWrapper>
      <MonthButton>{'<'}</MonthButton>
      <div>
        <span>March 2019</span>
      </div>
      <MonthButton>{'>'}</MonthButton>
    </MonthWrapper>
  </HeaderDaysWrapper>
);

export default Week;
