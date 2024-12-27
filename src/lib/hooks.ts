import { useContext } from "react";
import { TodosContext } from "../contexts/TodosContextProvider";

export const useTodoContext = () => {
  const context = useContext(TodosContext);
  if (!context) {
    throw new Error("useTodos must be used within a TodosProvider");
  }
  return context;
};
