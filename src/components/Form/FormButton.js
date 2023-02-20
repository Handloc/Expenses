import React from "react";
import styled from "styled-components";

const Button = styled.button`
  margin: 1rem 1rem 0 1rem;
  padding: 0.5rem;
  width: 7rem;
  font-size: 1.25rem;

  &:hover {
    cursor: pointer;
  }
`;

function FormButton(props) {
  return <Button type={props.type}>{props.name}</Button>;
}

export default FormButton;
