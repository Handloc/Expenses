import React, { useState } from "react";
import styled from "styled-components";
import FormField from "./FormField";
import FormButton from "./FormButton";

const FormWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 30%;
  background-color: #494949;
  padding: 2rem;
  color: white;
  border-radius: 1rem;
  /* border: 0.2rem solid #e06500; */
  box-shadow: 0 0 10px black;
  margin-top: 5rem;
`;

const FormButtonsWrapper = styled.div`
  flex-direction: row;
`;

function Form(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [submitted, setSubmitted] = useState();

  function submitHandler(event) {
    event.preventDefault();

    const expenseData = {
      title: title,
      amount: amount,
      date: date,
    };

    if (
      expenseData.title.length === 0 ||
      expenseData.amount.length === 0 ||
      expenseData.date.length === 0
    ) {
      setSubmitted(false);
      console.log(submitted);
    } else {
      setSubmitted(true);
      console.log(submitted);
      props.onCreateExpense(expenseData);
      setTitle((prevTitle) => "");
      setAmount((prevAmount) => "");
      setDate((prevDate) => "");
    }
  }

  function handleChangedTitle(newTitle) {
    setTitle((prevTitle) => newTitle);
  }

  function handleChangedAmount(newAmount) {
    setAmount((prevAmount) => newAmount);
  }

  function handleChangedDate(newDate) {
    setDate((prevDate) => newDate);
  }

  return (
    <FormWrapper onSubmit={submitHandler}>
      <FormField
        name={"Title"}
        type={"text"}
        value={title}
        onChangedData={handleChangedTitle}
        submitted={submitted}
      />
      <FormField
        name={"Amount"}
        type={"number"}
        value={amount}
        onChangedData={handleChangedAmount}
        submitted={submitted}
      />
      <FormField
        name={"Date"}
        type={"date"}
        value={date}
        onChangedData={handleChangedDate}
        submitted={submitted}
      />
      <FormButtonsWrapper>
        <FormButton name={"Add"} type={"submit"} />
        <FormButton name={"Cancel"} type={""} />
      </FormButtonsWrapper>
    </FormWrapper>
  );
}

export default Form;
