import React from "react";

const TodoItem = ({ title }) => {
  const deleteBtnHandler = () => {
    alert("Anda menekan button delete");
  };

  const btnHandler = (type) => {
    alert(`anda menekan buton ${type}`);
  };

  return (
    <div className="my-1 d-flex flex-row justify-content-between todo-item-container align-items-center">
      {title}
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
