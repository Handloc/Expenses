import React, { useState } from "react";
import styled from "styled-components";

const FormFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 16rem;
  padding: 0.5rem;
  font-size: 1.25rem;

  & input {
    width: 10rem;
    height: 1.5rem;
    font-size: 1.25rem;

    &:focus {
      outline: none;
    }
  }
`;

function FormField(props) {
  const inputValueHandler = (val) => {
    props.onChangedData(val.target.value);
  };

  return (
    <FormFieldWrapper>
      <label>{props.name}</label>
      <input
        type={props.type}
        step={`${props.type === "number" ? "0.01" : ""}`}
        onChange={inputValueHandler}
      ></input>
    </FormFieldWrapper>
  );
}

export default FormField;
