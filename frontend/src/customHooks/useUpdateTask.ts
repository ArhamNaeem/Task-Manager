import axios from "axios";
import { useEffect, useState } from "react";

export const useUpdateTask = () => {
  const [newTask, setNewTask] = useState("");
     const [taskId, setTaskId] = useState("");
     const giveTaskIDU = (id: string) => setTaskId(id);
     useEffect(() => {
       if (taskId  && newTask) {
         (async () => {
           try {
        console.log(newTask);

             const { data } = await axios.patch(
               `http://localhost:3000/api/v1/task/${taskId}`,
                {task:newTask}
             );
            //  setDeletedTask(data.task);
            // setNewTask("")
             console.log("task updated!!!");
           } catch (e) {
             console.log("Error has occurred");
           }
         })();
       }
     }, [taskId,newTask]);

     return { giveTaskIDU , setNewTask};
}