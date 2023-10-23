import { useForm } from "react-hook-form";
import { Input } from "../../components/widgets/Input";
import { TextArea } from "../../components/widgets/TextArea";
import { Button } from "../../components/widgets/Button";
import { useContext } from "react";
import { ToDoContext } from "../../providers/ToDoContext";

export const ToDoForm = ({ editing, setEditingMode }) => {
  const { register, handleSubmit, reset } = editing ? useForm({
    values: {
      title: editing.title,
      content: editing.content
    }
  }) : useForm();
  const { createTodo, editTodo } = useContext(ToDoContext);

  const cancelEdit = () => {
    setEditingMode(false);
  }

  const submit = payload => {
    editing ? editTodo({...payload, id: editing.id}) : createTodo(payload);
    editing ? setEditingMode(false) : reset();
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Input id="todo-title" label="Tarefa" type="text" required {...register("title")} />
      <TextArea id="todo-content" label="Descrição" required {...register("content")} />
      {editing && <Button type="button" onClick={cancelEdit}>Cancelar</Button>}
      <Button type="submit">Salvar</Button>
    </form>
  );
}