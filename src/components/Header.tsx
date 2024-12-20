import Logo from "./Logo";
import Counter from "./Counter";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-[28px] col-span-2 row-span-1 bg-[#fbf5ed] border-l border-black/[0.08]">
      <Logo />
      <Counter />
    </header>
  );
}
