import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMssg from "./components/WelcomeMssg";
import TodoItemsContextProvider from "./store/todo-items-store";


function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMssg />
        <TodoItems />
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
