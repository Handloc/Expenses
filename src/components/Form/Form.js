import React, { useState } from "react";
import styled from "styled-components";
import FormField from "./FormField";
import FormButton from "./FormButton";

const FormWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50vw;
  background-color: gray;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 10px black;
`;

const FormButtonsWrapper = styled.div`
  flex-direction: row;
`;

function Form() {
  function submitHandler(event) {
    event.preventDefault();
    const expenseData = {
      title: title,
      amount: amount,
      date: date,
    };

    console.log(expenseData);
  }

  const [title, setTitle] = useState();
  function handleChangedTitle(newTitle) {
    setTitle((prevTitle) => newTitle);
  }

  const [amount, setAmount] = useState();
  function handleChangedAmount(newAmount) {
    setAmount(newAmount);
  }

  const [date, setDate] = useState();
  function handleChangedDate(newDate) {
    setDate(newDate);
  }

  return (
    <FormWrapper onSubmit={submitHandler}>
      <FormField
        name={"Title"}
        type={"text"}
        onChangedData={handleChangedTitle}
      />
      <FormField
        name={"Amount"}
        type={"number"}
        onChangedData={handleChangedAmount}
      />
      <FormField
        name={"Date"}
        type={"date"}
        onChangedData={handleChangedDate}
      />
      <FormButtonsWrapper>
        <FormButton name={"Add"} type={"submit"} />
        <FormButton name={"Cancel"} type={""} />
      </FormButtonsWrapper>
    </FormWrapper>
  );
}

export default Form;
