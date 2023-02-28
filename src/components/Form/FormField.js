import React from "react";
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
    border-radius: 0.5rem;
    border: none;
    padding-left: 0.5rem;

    &.invalid {
      background-color: #d45454;
    }

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
        value={props.value}
        onChange={inputValueHandler}
        className={
          props.submitted === false && props.value === "" ? "invalid" : ""
        }
      ></input>
    </FormFieldWrapper>
  );
}

export default FormField;
