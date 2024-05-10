import TodoRow from "./components/todoRow";

function App() {
  return (
    <>
      <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
          <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
            <h1 className="text-2xl flex px-2">Todo List</h1>
            <TodoRow />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
