import React from "react";

const TodoItem = (props) => {
  const deleteBtnHandler = () => {
    alert("Anda menekan button delete");
  };

  const btnHandler = (type) => {
    alert(`anda menekan buton ${type}`);
  };

  return (
    <div className="my-1 d-flex flex-row justify-content-between todo-item-container align-items-center">
      {props.todoData.activity} ID: {props.todoData.id}
      <div>
        <button onClick={deleteBtnHandler} className="btn btn-danger">
          Delete
        </button>
        <button
          onClick={() => btnHandler("COMPLETE")}
          className="btn btn-success"
        >
          Complete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
