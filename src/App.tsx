import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import TodoList from "./components/TodoList";
import { useState } from "react";
import { Todo } from "./lib/types";

function App() {
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
    <div className="flex justify-center items-center font-sans bg-[#f1d4b3] min-h-screen flex-col ">
      <BackgroundHeading />
      <main
        className="relative w-[972px] h-[636px] bg-white rounded-[8px] shadow-lg grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden"
        grid-cols
      >
        <Header
          completedTodos={completedTodos}
          totalNumberOfTodos={totalNumberOfTodos}
        />
        <TodoList
          todos={todos}
          handleToggleTodoItem={handleToggleTodoItem}
          handleDeleteTodoItem={handleDeleteTodoItem}
        />
        <SideBar handleAddTodoItem={handleAddTodoItem} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
