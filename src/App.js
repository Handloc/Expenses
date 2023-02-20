// import ExpensesForm from "./components/Form/ExpensesForm";
import styled from "styled-components";
import Form from "./components/Form/Form";

const Wrapper = styled.div`
  background-color: darkmagenta;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Wrapper>
      <Form />
    </Wrapper>
  );
}

export default App;
