import { useState } from "react";
import { Button } from "./Button";
import Task from "./Checkbox";

function TodoRow() {
  const [inputValue, setInputValue] = useState<string>("");
  const [tasks, setTasks] = useState<string[]>([]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function handleClick() {
    setTasks((prevTasks) => [...prevTasks, inputValue]);
    setInputValue("");
  }

  return (
    <>
      <div className="m-2">
        {tasks.map((task, index) => (
          <Task key={index} label={task} />
        ))}
      </div>
      <div className="flex flex-row px-2 justify-between">
        <input
          value={inputValue}
          placeholder="Add task here..."
          className="border-none bg-slate-300 rounded-md content-center px-3"
          onChange={handleChange}
        />
        <Button onClick={handleClick} />
      </div>
    </>
  );
}

export default TodoRow;
