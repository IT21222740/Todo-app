import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="flex justify-center items-center font-sans bg-[#f1d4b3] min-h-screen flex-col ">
      <BackgroundHeading />
      <main
        className="relative w-[972px] h-[636px] bg-white rounded-[8px] shadow-lg grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden"
        grid-cols
      >
        <Header />
        <TodoList />
        <SideBar />
      </main>
      <Footer />
    </div>
  );
}

export default App;
