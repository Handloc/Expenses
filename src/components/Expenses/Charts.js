import React, { useState } from "react";
import styled from "styled-components";
import Chart from "./Chart";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 0.15rem solid black;
  border-radius: 1rem;
  margin-top: 1rem;
  color: white;
`;

const ChartBarsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const InfoBox = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 1rem;
  font-size: 1.25rem;

  & div span {
    font-weight: 700;
    font-size: 1.45rem;
  }
`;

function Charts() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [currentMonth, setCurrentMonth] = useState("January");
  function changeMonth(month) {
    setCurrentMonth(month);
  }
  return (
    <Wrapper>
      <InfoBox>
        <div>
          Month: <span>{currentMonth}</span>
        </div>
        <div>
          Expenses: <span>$100.00</span>
        </div>
      </InfoBox>
      <ChartBarsWrapper>
        {months.map((month) => (
          <Chart monthName={month} onMonthChange={changeMonth} />
        ))}
      </ChartBarsWrapper>
    </Wrapper>
  );
}

export default Charts;
