import { ToDoList } from "../../components/ToDoList";
import { ToDoForm } from "../../forms/ToDoForm";
import { ToDoProvider } from "../../providers/ToDoContext";

export const ToDo = () => {
  return (
    <>
      <h1>Lista de Tarefas</h1>
      <ToDoProvider>
        <ToDoForm />
        <ToDoList />
      </ToDoProvider>
    </>
  );
}