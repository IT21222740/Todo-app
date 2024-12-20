import Button from "./Button";

export default function AddTodoForm() {
  return (
    <form>
      <h2 className="font-medium text-[#231d15]">Add a todo</h2>
      <input
        type="text"
        className="block h-[45px] w-full border border-black/[12%] rounded-[5px] my-[9px] text-[14px] px-[16px] py-[12px]"
      />
      <Button>Add to List</Button>
    </form>
  );
}
