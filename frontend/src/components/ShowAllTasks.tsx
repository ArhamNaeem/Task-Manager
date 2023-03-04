// import App.css
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import axios from "axios";
import { useGetTask } from "../customHooks/useGetTask";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faTrash);
library.add(faEdit);
import { useDeleteTask } from "../customHooks/useDeleteTask";
import { useInputCheck } from "../customHooks/useInputCheck";
import { AnimatePresence, motion } from "framer-motion";
import { useUpdateTask } from "../customHooks/useUpdateTask";

interface propType {
  refresh: boolean;
  setRefresh: Dispatch<SetStateAction<boolean>>;
}
interface taskObj {
  task: string;
  id: string;
}
//TODO: ORGANIZE IT ALL

const ShowAllTasks = (props: propType) => {
  const { giveTaskID } = useDeleteTask();
  const { giveTaskIDU, setNewTask } = useUpdateTask();
  const newTask = useRef("");
  const [refresh, setRefresh] = useState(false);
  const [refreshU, setRefreshU] = useState(false);
  const [actualTask, setActualTask] = useState<taskObj>({ task: "", id: "" });
  const { taskData } = useGetTask(refresh || props.refresh || refreshU);

  useEffect(() => {
    // console.log(refreshU);
    setRefreshU(false);
    setRefresh(false);
    props.setRefresh(false);
    // console.log(refreshU);
  }, [refresh, props.refresh, refreshU]);
  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const [completed, setCompleted] = useState("");
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const updateTask = () => {
    giveTaskIDU(actualTask?.id);
    setNewTask(newTask.current);
    newTask.current = "";
    setRefreshU(true);
    setShowPopup(false);
  };

  return (
    <>
      <AnimatePresence>
        {showPopup && (
          <>
            <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
            <motion.div
              className=" h-3/4 w-1/2 m-auto left-1/4 bottom-24 absolute bg-white text-blue-600 z-50 rounded-md"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              <div className="flex flex-col items-center ">
                <h1 className="text-center text-3xl font-semibold my-10 ">
                  Your Task
                </h1>
                <textarea
                  className=" bg-transparent resize-none overflow-hidden border rounded-md my-10 w-4/5 outline-none p-5 pb-0  focus:border-blue-700 shadow-lg"
                  onChange={(e) => (newTask.current = e.target.value)}
                  placeholder={`${actualTask.task}`}
                ></textarea>
              </div>

              <div className="flex my-4 justify-center text-xl font-semibold">
                <input type="checkbox" id="complete" className="mr-4 w-4" />
                <label htmlFor="complete">TASK COMPLETED</label>
              </div>
              <div className="flex justify-center">
                <motion.button
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="bg-blue-600 hover:bg-blue-700 m-auto mt-10 block  text-white shadow-md shadow-slate-800  w-1/3 font-bold py-2 px-4 rounded"
                  onClick={updateTask}
                >
                  Update task
                </motion.button>
                <motion.button
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="bg-blue-600 hover:bg-blue-700 m-auto mt-10 block  text-white shadow-md shadow-slate-800  w-1/3 font-bold py-2 px-4 rounded"
                  onClick={handleClosePopup}
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <h1 className="text-center text-3xl my-2 font-semibold text-blue-600 drop-shadow-sm ">
        Task to be completed
      </h1>

      {taskData?.length ? (
        taskData.map((task) => (
          <div
            className={`${completed} flex flex-wrap justify-between text-blue-600 my-5 m-auto text-xl font-semibold border border-blue-100 shadow-md w-4/5 py-4 px-10`}
            key={task._id}
          >
            {task?.task}

            <div>
              <button
                className="mr-5"
                onClick={() => {
                  setActualTask({ task: task?.task, id: task?._id });
                  setShowPopup(true);
                }}
              >
                <FontAwesomeIcon icon="edit" />
              </button>
              <button
                onClick={() => {
                  giveTaskID(task._id);
                  setRefresh(true);
                }}
              >
                <FontAwesomeIcon icon="trash" />
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center text-3xl my-2 font-semibold text-blue-600 drop-shadow-sm">
          No task yet...
        </div>
      )}
    </>
  );
};

export default ShowAllTasks;
