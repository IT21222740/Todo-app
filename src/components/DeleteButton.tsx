export default function DeleteButton({ id, setTodos }) {
  return (
    <button
      onClick={() => {
        setTodos((prev) => prev.filter((t) => t.id !== id));
      }}
    >
      ❌
    </button>
  );
}
