import { Dispatch, SetStateAction, useState } from "react";
import { useDeleteTask } from "./useDeleteTask";
interface msgType {
  msg: string;
  color: string;
}

export const usehandleDeleteTask = (
  setRefresh: Dispatch<SetStateAction<boolean>>,
  setReqMsg: Dispatch<SetStateAction<msgType>>
) => {
  const { giveTaskID } = useDeleteTask();
  const [deletingId, setDeletingId] = useState("");

  const onDeleteTask = (taskID: string) => {
    try {
      giveTaskID(taskID);
      setDeletingId(taskID);
      setRefresh(true);
      setReqMsg({ msg: "Task deleted!", color: "blue-700" });
      setTimeout(() => {
        setReqMsg({ msg: "", color: "blue-700" });
      }, 1000);
    } catch (e) {
      setReqMsg({ msg: "Some error occurred!", color: "red-700" });

      setTimeout(() => {
        setReqMsg({ msg: "", color: "blue-700" });
      }, 1000);
    }
  };
  return { onDeleteTask, deletingId, setDeletingId };
};
