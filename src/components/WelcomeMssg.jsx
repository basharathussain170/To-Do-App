import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import { ImHappy } from "react-icons/im";
import styles from "./WelcomeMssg.module.css";
function WelcomeMssg() {
  const contextObt = useContext(TodoItemsContext);
  const todoItems = contextObt.item;
  return (
    todoItems.length == 0 && (
      <h1 className={styles.para}>
        Enjoy your Day <ImHappy />
      </h1>
    )
  );
}
export default WelcomeMssg;
