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

  background-color: #5f5f5f;
  border-radius: 1rem;
  box-shadow: 0 0 10px black;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
`;

const CharBarFill = styled.div`
  width: 100%;
  background-color: #e96900;
  transition: all 0.35s ease-out;
`;

function Chart(props) {
  let fillHeight = "0%";

  if (props.totalVal > 0) {
    fillHeight = Math.round((props.value / props.totalVal) * 100) + "%";
  }

  function changeMonth() {
    props.onMonthChange(props.label);
  }

  return (
    <CharBarWrapper>
      <BarWrapper onClick={changeMonth}>
        <ChartBar>
          <CharBarFill style={{ height: fillHeight }} />
        </ChartBar>
        <p>{props.label.slice(0, 3)}</p>
      </BarWrapper>
    </CharBarWrapper>
  );
}

export default Chart;
