import AddTodoForm from "./AddTodoForm";
import Button from "./Button";

type SideBarProps = {
  handleAddTodoItem: (todoItem: string) => void;
};

export default function SideBar({ handleAddTodoItem }: SideBarProps) {
  return (
    <section className="flex flex-col  col-[2/3] row-[2/3] bg-[#fffcf9] border-l border-black/[0.08] px-[25px] pt-[18px] pb-[28px]">
      <AddTodoForm handleAddTodoItem={handleAddTodoItem} />
      <div className="mt-auto space-y-2">
        <Button buttonType="secondary">Login</Button>
        <Button buttonType="secondary">Register </Button>
      </div>
    </section>
  );
}
