import ShowAllTasks from "./components/ShowAllTasks";
import {  LegacyRef, useRef, useState } from "react";
import { useInputCheck } from "./customHooks/useInputCheck";
import { useCreateTask } from "./customHooks/useCreateTask";
export default function App() {
  // const inputRef = useRef<any>();
  const [reqMsg, setReqMsg] = useState("Successfully added!");
    const [msg, setMsg] = useState("");
    const {validate,insertTask} = useInputCheck(msg,setMsg)
  const { createTask } = useCreateTask();
  return (
    <>
      <div className="text-4xl  font-semibold text-blue-600 text-center my-6">
        Task Manager
      </div>
      <div className=" h-24 text-blue-600  mt-20">
        <div className="flex justify-center">
          <input
            className="w-1/2 border h-10 outline-none p-3 drop-shadow-md  focus:border-blue-300"
            type="text"
            placeholder="Enter task.."
            onKeyDown={(e) => {
              insertTask(e);
              createTask(msg); //to insert msg into data
            }}
            onChange={(e: any) =>validate(e)}
             
            value={msg}
          />
          <div className="bg-white border h-10 pt-2 w-20 text-center border-blue-200 shadow-sm">
            {msg.length}/100
          </div>
          <button
            className="border h-10 ml-3 p-2 rounded-lg transition-all border-blue-300 hover:scale-105 hover:border-blue-500"
            onClick={(e) => {
              insertTask(e);
              createTask(msg);
            }}
          >
            Add Task
          </button>
        </div>
        <p className="mt-4 text-center text-lg font-semibold text-blue-700">
          {/* {reqMsg} */}
        </p>
      </div>

      <ShowAllTasks />
    </>
  );
}
