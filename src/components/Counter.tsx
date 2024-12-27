import { useTodoContext } from "../lib/hooks";

export default function Counter() {
  const { completedTodos, totalNumberOfTodos } = useTodoContext();
  return (
    <p>
      <b>{completedTodos}</b> /{totalNumberOfTodos} todos completed
    </p>
  );
}
