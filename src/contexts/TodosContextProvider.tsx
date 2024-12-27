import { createContext, useState } from "react";
import { Todo } from "../lib/types";

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

export default function TodosContextProvider({
  children,
}: TodoContextProviderProps) {
  //state
  const [todos, setTodos] = useState<Todo[]>([]);

  //derived state
  const totalNumberOfTodos: number = todos.length;
  const completedTodos: number = todos.filter((todo) => todo.completed).length;

  //event handlers/ actions
  const handleAddTodoItem = (todoItem: string) => {
    if (todoItem.trim() === "") {
      alert("Please enter a todo item");
      return;
    }
    if (todos.length >= 13) {
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
