import React from "react";
import styled from "styled-components";

const CharBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.925rem;
`;

const BarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  &:hover {
    p {
      color: #e96900;
    }
  }
`;

const ChartBar = styled.div`
  width: 1rem;
  height: 8rem;
  background-color: #e96900;
  border-radius: 1rem;

  box-shadow: 0 0 10px black;
`;

function Chart(props) {
  function changeMonth() {
    props.onMonthChange(props.monthName);
  }

  return (
    <CharBarWrapper>
      <BarWrapper onClick={changeMonth}>
        <ChartBar />
        <p>{props.monthName.slice(0, 3)}</p>
      </BarWrapper>
    </CharBarWrapper>
  );
}

export default Chart;
