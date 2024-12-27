import { createContext, useEffect, useState } from "react";
import { Todo } from "../lib/types";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

//types
type TodoContextProviderProps = {
  children: React.ReactNode;
};

type TTodosContext = {
  todos: Todo[];
  totalNumberOfTodos: number;
  completedTodos: number;
  handleAddTodoItem: (todoItem: string) => void;
  handleDeleteTodoItem: (id: number) => void;
  handleToggleTodoItem: (todo: Todo) => void;
};

//context
export const TodosContext = createContext<TTodosContext | null>(null);

const getInitialTodos = () => {
  const savedTodos = localStorage.getItem("todos");
  if (savedTodos) {
    return JSON.parse(savedTodos);
  }
  return [];
};

export default function TodosContextProvider({
  children,
}: TodoContextProviderProps) {
  //state
  const [todos, setTodos] = useState<Todo[]>(getInitialTodos);
  const { isAuthenticated } = useKindeAuth();

  //derived state
  const totalNumberOfTodos: number = todos.length;
  const completedTodos: number = todos.filter((todo) => todo.completed).length;

  //event handlers/ actions
  const handleAddTodoItem = (todoItem: string) => {
    if (todoItem.trim() === "") {
      alert("Please enter a todo item");
      return;
    }
    if (todos.length >= 3 && !isAuthenticated) {
      alert("You can only add 3 todos at a time");
      return;
    }
    const newTodo = {
      id: todos.length + 1,
      text: todoItem,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };
  const handleDeleteTodoItem = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleToggleTodoItem = (todo: Todo) => {
    setTodos(
      todos.map((t) =>
        t.id === todo.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodosContext.Provider
      value={{
        todos,
        totalNumberOfTodos,
        completedTodos,
        handleAddTodoItem,
        handleDeleteTodoItem,
        handleToggleTodoItem,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}
