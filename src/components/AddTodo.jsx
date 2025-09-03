import { useRef } from "react";
import { MdOutlineAddBox } from "react-icons/md";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {

  const todoNameElement = useRef();
  const todoDateElement = useRef();

  const contextObj = useContext(TodoItemsContext);
  const addNewItem = contextObj.addNewItem;

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    let todoName = todoNameElement.current.value;
    let todoDate = todoDateElement.current.value;
    addNewItem(todoName, todoDate);
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter todo Here"
          />
        </div>
        <div className="col-4">
          <input type="date" ref={todoDateElement} />
        </div>
        <div className="col-2">
          <button className="btn btn-success kg-button" type="submit">
            <MdOutlineAddBox />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;
