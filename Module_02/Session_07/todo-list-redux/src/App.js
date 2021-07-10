import React from "react";
import "./App.css";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import TodoItem from "./component/TodoItem";
import TodoItemF from "./component/TodoItemF";
import Axios from "axios";

// Props
// - Data dari parent ke child
// state: menampung berbagai data
class App extends React.Component {
  // const kegiatan = "Makan";
  state = {
    // nameKu: "Purwadhika",
    // user: {
    //   username: "username",
    //   email: "user@mail.com",
    // },
    // arr: ["Pisang", "Apel", "Leci"],
    arrObj: [],
    inputTodo: "",
  };
  // Synchronous semua saling menunggu untuk proses selanjutnya
  // Asynchronous langsung melanjutkan proses tidak harus menunggu response dari server
  fetchTodo = () => {
    // Start execute
    Axios.get("http://localhost:2000/todo")
      .then((res) => this.setState({ arrObj: res.data }))
      .catch((err) => {
        alert("Terjadi Kesalahan di server!!");
      });
  };

  componentDidMount() {
    this.fetchTodo();
  }

  // componentWillUnmount() {
  //   alert("UNMOUNT");
  // }

  // componentDidUpdate trigger misalnya ada perubahan state or props
  // componentDidUpdate() {}

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
    // this.setState({ nameKu: "Coding School" });
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

    // this.setState({
    //   arrObj: [
    //     ...this.state.arrObj,
    //     {  activity: this.state.inputTodo, id: this.state.arrObj.length + 1 },
    //   ],
    // });
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
    // this.setState({
    //   arrObj: this.state.arrObj.filter((val) => {
    //     return val.id !== id;
    //   }),
    // });
  };

  inputHandler = (event) => {
    // event.target.value menyimpan value dari input text
    this.setState({ inputTodo: event.target.value });
  };

  render() {
    return (
      <div className="container">
        <h1>Todo list</h1>
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
