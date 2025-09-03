import { createContext } from "react";
import { useReducer } from "react";
export const TodoItemsContext = createContext({
  todoItem: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      { todoName: action.payload.itemName, todoDate: action.payload.itemDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(
      (todo) => todo.todoName != action.payload.deletedItem
    );
  }
  return newTodoItems;
};

const TodoItemsContextProvider = ({ children }) => {
  const [todoItem, dispacthTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (itemName, itemDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDate,
      },
    };
    dispacthTodoItems(newItemAction);
  };

  const deleteItem = (deletedItem) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        deletedItem,
      },
    };
    dispacthTodoItems(deleteItemAction);
  };

  return (
    <TodoItemsContext.Provider
      value={{ item: todoItem, addNewItem: addNewItem, deleteItem: deleteItem }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};
export default TodoItemsContextProvider;
