import { createContext, useEffect, useState } from "react";
import { toDoApi } from "../services/api";

export const ToDoContext = createContext({});

export const ToDoProvider = ({ children }) => {
  const [ todoList, setTodoList ] = useState([]);

  const getTodoList = async () => {
    try {
      const { data } = await toDoApi.get("/todo");
      setTodoList(data);
    } catch (error) {
      console.error(error.message);
    }
  }

  const createTodo = async todo => {
    // try {
    //   const { data } = await toDoApi.post("/todo", todo);
    //   setTodoList([...todoList, data]);
    // } catch (error) {
    //   console.error(error.message);
    // }
    setTodoList([...todoList, {...todo, id: crypto.randomUUID() }]);
  }

  const editTodo = async toedit => {
    // try {
    //   const { data } = await toDoApi.patch(`/todo/${toedit.id}`, toedit);
    //   setTodoList(todoList.map(todo => todo.id === toedit.id ? toedit : todo));
    // } catch (error) {
    //   console.error(error.message);
    // }
    setTodoList(todoList.map(todo => todo.id === toedit.id ? toedit : todo));
  }

  const deleteTodo = async todelete => {
    // try {
    //   await toDoApi.delete(`/todo/${todelete.id}`);
    //   setTodoList(todoList.filter(todo => todo.id !== todelete.id));
    // } catch (error) {
    //   console.error(error.message);
    // }
    setTodoList(todoList.filter(todo => todo.id !== todelete.id));
  }

  useEffect(() => { 
    // getTodoList();
  }, []);


  return (
    <ToDoContext.Provider value={{ todoList, createTodo, editTodo, deleteTodo }}>
      {children}
    </ToDoContext.Provider>
  );
}