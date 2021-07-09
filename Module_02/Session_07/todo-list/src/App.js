import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import TodoItem from "./component/TodoItem";
import TodoItemF from "./component/TodoItemF";

function App() {
  return (
    <div>
      <h1>todo list</h1>
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItemF title={"Tidur"} />
    </div>
  );
}

export default App;
