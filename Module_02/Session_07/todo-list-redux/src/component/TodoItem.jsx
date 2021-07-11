import React from "react";

class TodoItem extends React.Component {
  btnHandler(type) {
    alert(`Anda memencet button ${type}`);
  }
  render() {
    return (
      <div className="my-1 d-flex flex-row justify-content-between todo-item-container align-items-center">
        {this.props.todoData.activity} ID: {this.props.todoData.id}
        <div className="div">
          <button
            onClick={this.props.deleteTodoHandler}
            className="btn btn-danger"
          >
            Delete
          </button>
          <button
            disabled={this.props.todoData.isFinished}
            onClick={this.props.completeTodoHandler}
            className="btn btn-success m-1"
          >
            {this.props.todoData.isFinished ? "Finished" : "Complete"}
            {/* {this.props.todoData.isFinished ? (
              <strong>Finished</strong>
            ) : (
              <strong>Complete</strong>
            )} */}
          </button>
        </div>
      </div>
    );
  }
}

export default TodoItem;
