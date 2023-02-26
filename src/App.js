import React, { useState } from "react";
import styled from "styled-components";
import Expenses from "./components/Expenses/Expenses";
import Form from "./components/Form/Form";
import "./App.scss";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const EXPENSES_DATA = [];

function App() {
  const [expenseData, setExpenseData] = useState(EXPENSES_DATA);

  function CreateExpense(formData) {
    setExpenseData((prevExpensesData) => {
      return [formData, ...prevExpensesData];
    });
  }

  return (
    <Wrapper>
      <Form onCreateExpense={CreateExpense} />
      <Expenses items={expenseData} />
    </Wrapper>
  );
}

export default App;
