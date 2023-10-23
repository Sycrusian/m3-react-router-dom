import { useContext } from "react";
import { ToDoContext } from "../../providers/ToDoContext";
import { ToDoHandler } from "../widgets/ToDoHandler";

export const ToDoList = () => {
  const { todoList } = useContext(ToDoContext);

  return (
    <ul>
      {todoList.map(todo => <ToDoHandler key={todo.id} todo={todo}/>)}
    </ul>
  );
}