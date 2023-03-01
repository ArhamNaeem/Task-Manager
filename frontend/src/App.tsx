import "./App.css";
import ShowAllTasks from "./components/ShowAllTasks";
import { useRef, useState } from "react";
function App() {
  const [msg, setMsg] = useState("");
  const insertTask = (e: any) => {
    if (!msg) {
      return;
    }
    if (e.type === "keydown" && e.code !== "Enter") {
      return;
    }
    console.log(msg);
    setMsg("");
  };
  return (
    <>
      <div>Task Manager</div>
      <div>
        <input
          type="text"
          onKeyDown={(e) => {
            insertTask(e);
          }}
          onChange={(e) => setMsg(e.target.value)}
          value={msg}
        />
        <button
          onClick={(e) => {
            insertTask(e);
          }}
        >
          Add Task
        </button>
      </div>

      <ShowAllTasks />
    </>
  );
}

export default App;
