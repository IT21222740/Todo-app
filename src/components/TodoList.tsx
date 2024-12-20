import { useState } from "react";
import DeleteButton from "./DeleteButton";

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "buy groceries", completed: false },
    { id: 2, text: "do laundry", completed: false },
    { id: 3, text: "clean the house", completed: false },
  ]);
  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center px-8 h-[50px] test-[14px] border-black/[8%] border cursor-pointer "
        >
          <span
            onClick={() =>
              setTodos(
                todos.map((t) =>
                  t.id === todo.id ? { ...t, completed: !t.completed } : t
                )
              )
            }
            className={`${
              todo.completed ? "line line-through text-[#ccc]" : ""
            } `}
          >
            {todo.text}
          </span>{" "}
          <DeleteButton id={todo.id} setTodos={setTodos} />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
