import React from "react";

class TodoItem extends React.Component {
  btnHandler(type) {
    alert(`Anda memencet button ${type}`);
  }
  render() {
    return (
      <div className="my-1 d-flex flex-row justify-content-between todo-item-container align-items-center">
        {this.props.todoData.activity} ID: {this.props.todoData.id}
        <div>
          <button
            onClick={() => this.props.deleteTodoHandler(this.props.todoData.id)}
            className="btn btn-danger"
          >
            Delete
          </button>
          <button
            onClick={() => this.btnHandler(this.props.todoData.activity)}
            className="btn btn-success"
          >
            Complete
          </button>
        </div>
      </div>
    );
  }
}

export default TodoItem;
