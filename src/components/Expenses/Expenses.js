import React, { useState } from "react";
import styled from "styled-components";
import Expense from "./Expense";
import Charts from "./Charts";

const ExpensesWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 70%;
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
  const numToMonths = {
    "01": "January",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    10: "October",
    11: "November",
    12: "December",
  };

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
        <>
          <Charts expenses={filteredExpenses} chosenYear={chosenYear} />
          {filteredExpenses.map((expense) => (
            <Expense
              key={expense.key}
              title={expense.title}
              amount={expense.amount}
              year={expense.date.split("-")[0]}
              month={numToMonths[expense.date.split("-")[1]]}
              day={expense.date.split("-")[2]}
            />
          ))}
        </>
      )}
    </ExpensesWrapper>
  );
}

export default Expenses;
