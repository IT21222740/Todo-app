import DeleteButton from "./DeleteButton";
import { Todo } from "../lib/types";

type TodoListProps = {
  todos: Todo[];
  handleToggleTodoItem: (todo: {
    id: number;
    text: string;
    completed: boolean;
  }) => void;
  handleDeleteTodoItem: (id: number) => void;
};

function TodoList({
  todos,
  handleToggleTodoItem,
  handleDeleteTodoItem,
}: TodoListProps) {
  return (
    <ul>
      {todos.length === 0 && (
        <li className="h-full flex justify-center items-center font-semibold ">
          Start by Adding a todo
        </li>
      )}
      {todos.map((todo) => (
        <li
          onClick={() => handleToggleTodoItem(todo)}
          key={todo.id}
          className="flex justify-between items-center px-8 h-[50px] test-[14px] border-black/[8%] border cursor-pointer "
        >
          <span
            className={`${
              todo.completed ? "line line-through text-[#ccc]" : ""
            } `}
          >
            {todo.text}
          </span>{" "}
          <DeleteButton
            id={todo.id}
            handleDeleteTodoItem={handleDeleteTodoItem}
          />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
