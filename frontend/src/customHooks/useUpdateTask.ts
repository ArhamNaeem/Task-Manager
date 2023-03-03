import axios from "axios";
import { useEffect, useState } from "react";

export const useUpdateTask = () => {

     const [taskId, setTaskId] = useState("");
     const giveTaskIDU = (id: string) => setTaskId(id);
     useEffect(() => {
       if (taskId) {
         (async () => {
           try {

             const { data } = await axios.patch(
               `http://localhost:3000/api/v1/task/${taskId}`
             );
            //  setDeletedTask(data.task);
             console.log("task updated!!!");
           } catch (e) {
             console.log("Error has occurred");
           }
         })();
       }
     }, [taskId]);

     return { giveTaskIDU };
}