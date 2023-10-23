import { useState } from "react";
import { ToDoForm } from "../../../forms/ToDoForm";
import { ToDoItem } from "../ToDoItem";

export const ToDoHandler = ({ todo }) => {
  const [ editingMode, setEditingMode ] = useState(false);

  return (
    <li>
      {editingMode ? <ToDoForm editing={todo} setEditingMode={setEditingMode} /> : <ToDoItem todo={todo} setEditingMode={setEditingMode} />}
    </li>
  );
}