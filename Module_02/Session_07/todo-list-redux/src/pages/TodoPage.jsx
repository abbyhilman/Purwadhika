import React from "react";
import "../styles.css";
import "bootstrap/dist/css/bootstrap.css";
import TodoItem from "../component/TodoItem";
import Axios from "axios";

class TodoPage extends React.Component {
  state = {
    arrObj: [],
    inputTodo: "",
  };
  fetchTodo = () => {
    Axios.get("http://localhost:2000/todo")
      .then((res) => this.setState({ arrObj: res.data }))
      .catch((err) => {
        alert("Terjadi Kesalahan di server!!");
      });
  };

  componentDidMount() {
    this.fetchTodo();
  }

  completeTodo = (id) => {
    Axios.patch(`http://localhost:2000/todo/${id}`, {
      isFinished: true,
    })
      .then(() => {
        alert("Berhasil Complete todo!");
        this.fetchTodo();
      })
      .catch((err) => {
        alert("Terjadi Kesalahan di server!!");
      });
  };

  renderToDoList = () => {
    return this.state.arrObj.map((val) => {
      return (
        <TodoItem
          completeTodoHandler={this.completeTodo}
          deleteTodoHandler={this.deleteTodo}
          todoData={val}
        />
      );
    });
  };

  addTodo = () => {
    Axios.post("http://localhost:2000/todo", {
      activity: this.state.inputTodo,
      isFinished: false,
    })
      .then(() => {
        alert("Success added Todo");
        this.fetchTodo();
      })
      .catch((err) => {
        alert("Terjadi Kesalahan di server!!");
      });
  };

  deleteTodo = (id) => {
    Axios.delete(`http://localhost:2000/todo/${id}`)
      .then(() => {
        alert("Success delete todo");
        this.fetchTodo();
      })
      .catch((err) => {
        alert("Terjadi Kesalahan di server!!");
      });
  };

  inputHandler = (event) => {
    this.setState({ inputTodo: event.target.value });
  };

  render() {
    return (
      <div className="container mt-3">
        {this.renderToDoList()}
        <div className="mt-3">
          <input type="text" className="mx-3" onChange={this.inputHandler} />
          <button class="btn btn-primary" onClick={this.addTodo}>
            Add Todo
          </button>
        </div>
      </div>
    );
  }
}

export default TodoPage;
