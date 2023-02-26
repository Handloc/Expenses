import React from "react";
import styled from "styled-components";

const Button = styled.button`
  margin: 1rem 1rem 0 1rem;
  padding: 0.5rem;
  width: 7rem;
  font-size: 1.25rem;
  background-color: #6d6d6d;
  color: #ffffff;
  border-radius: 1rem;
  transition: background-color 0.2s;

  &.Add:hover {
    background-color: #0b8000;
  }

  &.Add:active {
    background-color: #086100;
  }

  &.Cancel:hover {
    background-color: #df0000;
  }

  &.Cancel:active {
    background-color: #a30000;
  }

  &:hover {
    cursor: pointer;
  }
`;

function FormButton(props) {
  return (
    <Button type={props.type} className={props.name}>
      {props.name}
    </Button>
  );
}

export default FormButton;
