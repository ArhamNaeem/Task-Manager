import axios from "axios";
import { useEffect, useState } from "react";
interface resType {
  _id: string;
  task: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}


export const useGetTask = (refresh:boolean) => {
    const [taskData, setTaskData] = useState<resType[]>();
      
    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(
                    "http://localhost:3000/api/v1/task"
                );
                // console.log(data.task)
                setTaskData(data.task);
            } catch (e) {
                console.log(e, "has occurred");
            }
        })();
        
      }, [refresh]);

 return {taskData}
}