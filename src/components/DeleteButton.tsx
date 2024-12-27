type DeleteButtonProps = {
  id: number;
  handleDeleteTodoItem: (id: number) => void;
};
export default function DeleteButton({
  id,
  handleDeleteTodoItem,
}: DeleteButtonProps) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        handleDeleteTodoItem(id);
      }}
    >
      ❌
    </button>
  );
}
