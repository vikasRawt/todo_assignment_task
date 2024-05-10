import { useState } from "react";

function Task({ label }: { label: string }) {
  const [removed, setRemoved] = useState(false);
  const [nocolr, setColor] = useState("border-black");
  if (removed) {
    return null;
  }

  return (
    <>
      <div className="flex flex-row justify-normal mb-2 group">
        <div>
          <button
            className={`cursor-pointer flex flex-row justify-between items-center border rounded-full p-3 ${nocolr}`}
            onClick={() => {
              setColor("bg-green-500");
            }}
          ></button>
        </div>
        <div>
          <h2 className="pl-2">{label}</h2>
        </div>
        <div className="pl-2 opacity-0 group-hover:opacity-100">
          <button
            className="cursor-pointer flex flex-row justify-between items-center border rounded-md px-2 bg-green-400"
            onClick={() => setRemoved(true)}
          >
            *
          </button>
        </div>
      </div>
    </>
  );
}

export default Task;
