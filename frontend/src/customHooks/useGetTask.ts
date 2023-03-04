import axios from "axios";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
interface resType {
  _id: string;
  task: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
interface msgType {
  msg: string;
  color: string;
}

export const useGetTask = (
  refresh: boolean,
  setReqMsg: Dispatch<SetStateAction<msgType>>
) => {
  const [taskData, setTaskData] = useState<resType[]>();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/api/v1/task");
        setTaskData(data.task);
      } catch (e) {
        setReqMsg({
          msg: `Couldn't fetch tasks due to some error.`,
          color: "red-700",
        });
        setTimeout(() => {
          setReqMsg({ msg: "", color: "blue-700" });
        }, 1000);
      }
    })();
  }, [refresh]);

  return { taskData };
};
