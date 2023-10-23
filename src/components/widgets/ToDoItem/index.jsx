import { useContext, useState } from "react";
import { Button } from "../Button";
import { ToDoContext } from "../../../providers/ToDoContext";

export const ToDoItem = ({ todo, setEditingMode }) => {
  const  { deleteTodo } = useContext(ToDoContext);
  
  const editItem = () => {
    setEditingMode(true);
  }

  const deleteItem = () => {
    deleteTodo(todo);
  }

  return (
    <>
      <h3>{todo.title}</h3>
      <p>{todo.content}</p>
      <Button onClick={editItem}>Editar</Button>
      <Button onClick={deleteItem}>Excluir</Button>
    </>
  );
}