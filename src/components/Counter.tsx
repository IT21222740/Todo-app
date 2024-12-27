type CounterProps = {
  totalNumberOfTodos: number;
  completedTodos: number;
};
export default function Counter({
  totalNumberOfTodos,
  completedTodos,
}: CounterProps) {
  return (
    <p>
      <b>{completedTodos}</b> /{totalNumberOfTodos} todos completed
    </p>
  );
}
