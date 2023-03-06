import ShowAllTasks from "./components/ShowAllTasks";
import { LegacyRef, useRef, useState } from "react";
import { useInputCheck } from "./customHooks/useInputCheck";
import { useCreateTask } from "./customHooks/useCreateTask";
import { motion } from "framer-motion";

interface msgType{
  msg: string;
  color: string;
}

export default function App() {
  const [reqMsg, setReqMsg] = useState<msgType>({
    msg: "",
    color: "red-700",
  });
  const [msg, setMsg] = useState("");
  const [msgAdded, setMsgAdded] = useState(false);
  const { validate, insertTask } = useInputCheck(
    msg,
    setMsg,
    msgAdded,
    setMsgAdded,
    setReqMsg
  );
  return (
    <>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 25 }}
        className="text-4xl font-semibold text-blue-600 text-center my-6"
      >
        Task Manager
      </motion.div>
      <div className=" h-24 text-blue-600  mt-20">
        <div className="flex justify-center items-center flex-col md:flex-row md:items-start ">
          <input
            className="w-5/6 lg:w-1/2 mb-3 border h-10 outline-none p-3 drop-shadow-md  focus:border-blue-300"
            type="text"
            placeholder="Enter task.."
            onKeyDown={(e) => {
              insertTask(e);
            }}
            onChange={(e) => validate(e)}
            value={msg}
          />
          <div className="hidden md:block md:bg-white md:border md:h-10 md:pt-2 md:w-20 md:text-center md:border-blue-200 md:shadow-sm">
            {msg.length}/100
          </div>
          <button
            className="border h-10 ml-3 p-2 w-1/2 md:w-24 rounded-lg transition-all border-blue-300 hover:scale-105 hover:border-blue-500"
            onClick={(e) => {
              insertTask(e);
            }}
          >
            Add Task
          </button>
        </div>
        <p
          className={`hidden md:block mt-4 text-center text-lg font-semibold text-${reqMsg.color}`}
        >
          {reqMsg.msg}
        </p>
      </div>

      <ShowAllTasks
        refresh={msgAdded}
        setRefresh={setMsgAdded}
        setReqMsg={setReqMsg}
      />
    </>
  );
}
