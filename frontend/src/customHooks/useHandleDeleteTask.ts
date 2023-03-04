import { Dispatch, SetStateAction, useState } from "react";
import { useDeleteTask } from "./useDeleteTask";

export const usehandleDeleteTask = (setRefresh: Dispatch<SetStateAction<boolean>>, setReqMsg: Dispatch<SetStateAction<string>>) => {
  const { giveTaskID } = useDeleteTask();
  const [deletingId, setDeletingId] = useState("");

  const onDeleteTask = (taskID: string) => {
    try {
      giveTaskID(taskID);
      setDeletingId(taskID);
      setRefresh(true);
      setReqMsg("Task deleted!");
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
  return { onDeleteTask, deletingId , setDeletingId};
};
