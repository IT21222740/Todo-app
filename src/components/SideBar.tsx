import AddTodoForm from "./AddTodoForm";
import Button from "./Button";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

export default function SideBar() {
  const { login, register, isAuthenticated, user, logout, isLoading } =
    useKindeAuth();
  return (
    <section className="flex flex-col  col-[2/3] row-[2/3] bg-[#fffcf9] border-l border-black/[0.08] px-[25px] pt-[18px] pb-[28px]">
      <AddTodoForm />
      <div className="mt-auto space-y-2">
        {isLoading ? null : isAuthenticated ? (
          <>
            <p className="text-sm">Logged in as {user?.email}</p>
            <Button buttonType="secondary" onClick={logout}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button buttonType="secondary" onClick={login}>
              Login
            </Button>
            <Button buttonType="secondary" onClick={register}>
              Register{" "}
            </Button>
          </>
        )}
      </div>
    </section>
  );
}
