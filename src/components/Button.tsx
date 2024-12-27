type buttonProps = {
  buttonType?: "primary" | "secondary";
  children: React.ReactNode;
  onClick?: () => Promise<void>;
};
export default function Button({ buttonType, children, onClick }: buttonProps) {
  return (
    <button
      className={`h-[45px] w-[100%] items-center bg-[#473a2b] border border-black/[0.08] rounded-[5px] cursor-pointer hover:bg-[#322618] text-[14px] text-[#fff] ${
        buttonType === "secondary" ? "opacity-[85%]" : ""
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
