import { Todo } from "../App";
type CounterProps = {
  todos: Todo[];
};
export default function Counter({ todos }: CounterProps) {
  const completedTodos = todos.filter((todo) => todo.completed).length;
  return (
    <p>
      <b>{completedTodos}</b> /{todos.length} todos completed
    </p>
  );
}
