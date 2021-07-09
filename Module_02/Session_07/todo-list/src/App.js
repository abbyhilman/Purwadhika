import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import TodoItem from "./component/TodoItem";
import TodoItemF from "./component/TodoItemF";
// Props
// - Data dari parent ke child
// state: menampung berbagai data
class App extends React.Component {
  // const kegiatan = "Makan";
  state = {
    nameKu: "Purwadhika",
    user: {
      username: "username",
      email: "user@mail.com",
    },
    arr: ["Pisang", "Apel", "Leci"],
    arrObj: [
      { activity: "Pisang", id: 1 },
      { activity: "Apel", id: 2 },
      { activity: "Leci", id: 3 },
      { activity: "Orange", id: 4 },
      { activity: "Mango", id: 5 },
    ],
    arrObjStr: [
      { activity: { id: "1" } },
      { activity: { id: "2" } },
      { activity: { id: "3" } },
      { activity: { id: "4" } },
    ],
    inputTodo: "",
  };

  renderToDoList = () => {
    return this.state.arrObj.map((val) => {
      return <TodoItem deleteTodoHandler={this.deleteTodo} todoData={val} />;
    });
  };

  addTodo = () => {
    // this.setState({ nameKu: "Coding School" });
    this.setState({
      arrObj: [
        ...this.state.arrObj,
        { activity: this.state.inputTodo, id: this.state.arrObj.length + 1 },
      ],
    });
  };

  deleteTodo = (id) => {
    this.setState({
      arrObj: this.state.arrObj.filter((val) => {
        return val.id !== id;
      }),
    });
  };

  inputHandler = (event) => {
    // event.target.value menyimpan value dari input text
    this.setState({ inputTodo: event.target.value });
  };

  render() {
    console.log(this.state.arrObjStr);
    return (
      <div>
        <h1>todo list</h1>
        {/* <h1>{this.state.arr[1]}</h1> */}
        {this.renderToDoList()}
        <div>
          <input type="text" className="mx-3" onChange={this.inputHandler} />
          <button class="btn btn-primary" onClick={this.addTodo}>
            Add Todo
          </button>
        </div>
        {/* {this.state.arrObjStr.map((val) => {
          return <TodoItem todoData={val} />;
        })} */}
        {/* <TodoItem todoData={{ activity: "Makan", id: 1 }} />
        <TodoItem todoData={{ activity: "Mandi", id: 2 }} />
        <TodoItem todoData={{ activity: "Coding", id: 3 }} /> */}
        {/* <TodoItemF todoData={{ activity: "Makan", id: 1 }} />
        <TodoItemF todoData={{ activity: "Mandi", id: 2 }} />
        <TodoItemF todoData={{ activity: "Coding", id: 3 }} /> */}

        {/* <ul>
          {this.state.arr.map((val) => {
            return <li>{val}</li>;
          })}
        </ul> */}
      </div>
    );
  }
}

export default App;
