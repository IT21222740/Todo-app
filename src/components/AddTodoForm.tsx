import Button from "./Button";
import { useState } from "react";

type AddTodoFormProps = {
  handleAddTodoItem: (todoItem: string) => void;
};

export default function AddTodoForm({ handleAddTodoItem }: AddTodoFormProps) {
  const [toodItem, setTodoItem] = useState("");

  const addTodoItem = (e: React.FormEvent) => {
    e.preventDefault();
    handleAddTodoItem(toodItem);
    setTodoItem("");
  };

  return (
    <form onSubmit={addTodoItem}>
      <h2 className="font-medium text-[#231d15]">Add a todo</h2>
      <input
        type="text"
        className="block h-[45px] w-full border border-black/[12%] rounded-[5px] my-[9px] text-[14px] px-[16px] py-[12px]"
        value={toodItem}
        onChange={(e) => setTodoItem(e.target.value)}
      />
      <Button>Add to List</Button>
    </form>
  );
}
