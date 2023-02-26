import React from "react";
import styled from "styled-components";

const ExpenseWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  height: 100%;
  background-color: #e96900;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 10px black;
  margin: 1rem 0;
`;

const DateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0.5rem;
  width: 20%;
  border: 0.2rem solid #000000;
  background-color: #494949;
  border-radius: 1rem;
  color: white;
  font-size: 1.25rem;

  & p {
    margin: 0;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 2rem;
  width: 40%;
`;

function Expense(props) {
  return (
    <ExpenseWrapper>
      <DateContainer>
        <p>{props.date}</p>
      </DateContainer>
      <TitleContainer>{props.title}</TitleContainer>
      <DateContainer>${props.amount}</DateContainer>
    </ExpenseWrapper>
  );
}

export default Expense;
