import React from "react";
import styled from "styled-components";
import Expense from "./Expense";

const ExpensesWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 60%;
  background-color: #494949;
  padding: 2rem;
  border-radius: 1rem;
  /* border: 0.2rem solid #e06500; */
  box-shadow: 0 0 10px black;
  margin-top: 3rem;
`;

const Message = styled.p`
  font-size: 1.5rem;
  color: white;
`;

function Expenses(props) {
  return (
    <ExpensesWrapper>
      {props.items.length === 0 ? (
        <Message>No expenses found</Message>
      ) : (
        props.items.map((expense) => (
          <Expense
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )}
    </ExpensesWrapper>
  );
}

export default Expenses;
