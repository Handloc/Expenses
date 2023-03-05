import React, { useState } from "react";
import styled from "styled-components";
import Expense from "./Expense";
import Charts from "./Charts";

const ExpensesWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 60%;
  background-color: #494949;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 10px black;
  margin-top: 3rem;
`;

const Message = styled.p`
  font-size: 1.5rem;
  color: white;
`;

const SelectList = styled.select`
  background-color: #6d6d6d;
  cursor: pointer;
  color: white;
  font-size: 1.25rem;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  border: 0.15rem solid black;

  &:focus {
    outline: none;
  }
`;

function Expenses(props) {
  const [chosenYear, setChosenYear] = useState("2023");

  const changeYear = (yearValue) => {
    setChosenYear(yearValue.target.value);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.split("-")[0] === chosenYear;
  });

  return (
    <ExpensesWrapper>
      <SelectList onChange={changeYear} value={chosenYear}>
        <option>2020</option>
        <option>2021</option>
        <option>2022</option>
        <option>2023</option>
      </SelectList>
      {filteredExpenses.length === 0 ? (
        <Message>No expenses found</Message>
      ) : (
        filteredExpenses.map((expense) => (
          <Expense
            key={expense.key}
            title={expense.title}
            amount={expense.amount}
            year={expense.date.split("-")[0]}
            month={expense.date.split("-")[1]}
            day={expense.date.split("-")[2]}
          />
        ))
      )}
    </ExpensesWrapper>
  );
}

export default Expenses;
