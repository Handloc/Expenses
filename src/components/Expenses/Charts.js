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

function Charts(props) {
  const monthsToNum = {
    January: "0",
    February: "1",
    March: "2",
    April: "3",
    May: "4",
    June: "5",
    July: "6",
    August: "7",
    September: "8",
    October: "9",
    November: "10",
    December: "11",
  };

  const dataPoints = [
    { label: "January", value: 0 },
    { label: "February", value: 0 },
    { label: "March", value: 0 },
    { label: "April", value: 0 },
    { label: "May", value: 0 },
    { label: "June", value: 0 },
    { label: "July", value: 0 },
    { label: "August", value: 0 },
    { label: "September", value: 0 },
    { label: "October", value: 0 },
    { label: "November", value: 0 },
    { label: "December", value: 0 },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = Number(expense.date.split("-")[1]);
    dataPoints[expenseMonth - 1].value += +expense.amount;
  }

  let totalValue = 0;
  const dataPointsValues = dataPoints.map(
    (dataPoint) => (totalValue += dataPoint.value)
  );
  // const totalValue = Math.max(...dataPointsValues);

  const [currentMonth, setCurrentMonth] = useState("January");
  function changeMonth(month) {
    setCurrentMonth(month);
  }
  return (
    <Wrapper>
      <InfoBox>
        <div>
          Total expenses in {props.chosenYear}: <span>${totalValue}</span>
        </div>
      </InfoBox>
      <InfoBox>
        <div>
          Month: <span>{currentMonth}</span>
        </div>
        <div>
          Expenses: <span>${dataPoints[monthsToNum[currentMonth]].value}</span>
        </div>
      </InfoBox>
      <ChartBarsWrapper>
        {dataPoints.map((month) => (
          <Chart
            key={month.label}
            label={month.label}
            value={month.value}
            totalVal={totalValue}
            onMonthChange={changeMonth}
          />
        ))}
      </ChartBarsWrapper>
    </Wrapper>
  );
}

export default Charts;
