import logo from './logo.svg';
import './App.css';
import TaskList from "./TaskList";
import AddTask from "./AddTask";


function App() {
  return (
    <div className="App">
      <h1>TodoList</h1>
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;
