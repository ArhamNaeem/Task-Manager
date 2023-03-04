import axios from "axios";
import { useEffect, useState } from "react";
interface resType {
  _id: string;
  task: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}


export const useGetTask = (refresh:boolean, setReqMsg:any) => {
    const [taskData, setTaskData] = useState<resType[]>();
      
    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(
                    "http://localhost:3000/api/v1/task"
                );
                setTaskData(data.task);
            } catch (e) {
                console.log("error has occurred");
                setReqMsg(`Couldn't fetch tasks due to some error.`)
                setTimeout(() => {
                    setReqMsg("")
                }, 1000);
            }
        })();
        
      }, [refresh]);

 return {taskData}
}