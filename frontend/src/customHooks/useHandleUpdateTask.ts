import { useState } from "react";
import { usehandleDeleteTask } from "./useHandleDeleteTask";
import { useUpdateTask } from "./useUpdateTask";

export const useHandleUpdateTask = (
  setRefreshU: any,
  handleClosePopup: any,
  setReqMsg: any,
  setDeletingId:any
) => {
  const { giveTaskIDU, setNewTask } = useUpdateTask();
  const [isCompleted, setIsCompleted] = useState(false);
  const { onDeleteTask } = usehandleDeleteTask(setRefreshU, setReqMsg);
  const updateTask = (taskID: any, newTask: any) => {
    try {
      if (isCompleted) {
        onDeleteTask(taskID);
        setDeletingId(taskID)
        setIsCompleted(false);
      }

      giveTaskIDU(taskID);
      setNewTask(newTask.current);
      newTask.current = "";
      setRefreshU(true);
      // setShowPopup(false);
      console.log(isCompleted);
      handleClosePopup();
      setTimeout(() => {
        setReqMsg("");
      }, 1000);
    } catch (e) {
      setReqMsg("Some error occurred!");
      setTimeout(() => {
        setReqMsg("");
      }, 1000);
    }
  };
  return { updateTask, isCompleted, setIsCompleted };
};
