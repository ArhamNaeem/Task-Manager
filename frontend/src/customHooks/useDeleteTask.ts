import axios from "axios";
import { useEffect, useState } from "react";
interface resType {
  _id: string;
  task: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export const useDeleteTask = () => {
  const [deletedTask, setDeletedTask] = useState<resType[]>();
  const [taskId, setTaskId] = useState("");
  
  const giveTaskID = (id: string) => setTaskId(id);
 
  useEffect(() => {
    if (taskId) {
      (async () => {
        try {
          const { data } = await axios.delete(`http://localhost:3000/api/v1/task/${taskId}`);
          setDeletedTask(data.task);
        } catch (e) {
          console.log('Error has occurred');
        }
      })();
    }
  }, [taskId]);

  return { giveTaskID  };
};
