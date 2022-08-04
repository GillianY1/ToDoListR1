import './cssreset.css';
import './App.css';
import TaskList from "./TaskList";
import AddTask from "./AddTask";
import styled from "styled-components"


function App() {
  return (
    <Wrapper >
      <Title>TodoList</Title>
      <AddTask />
      <TaskList />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #3c5d95;
  height: 100vh;
  padding-top: 70px;
`;

const Title = styled.h1`
  margin: 0;
  text-align: center;
  font-weight: bold;
  font-size: 28px;
  letter-spacing: 2px;
  color: #ffc236;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;


export default App;
