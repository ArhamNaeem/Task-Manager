import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { useCreateTask } from "./useCreateTask";
interface msgType {
  msg: string;
  color: string;
}

export const useInputCheck = (
  msg: string,
  setMsg: Dispatch<SetStateAction<string>>,
  msgAdded: boolean,
  setMsgAdded: Dispatch<SetStateAction<boolean>>,
  setReqMsg: Dispatch<SetStateAction<msgType>>
) => {
  const { createTask } = useCreateTask();
  const insertTask = (e: any) => {
    try {
      if (!msg || !msg.trim()) {
        return;
      }

      if (e.type === "keydown" && e.code !== "Enter") {
        return;
      }
      createTask(msg);
      setMsgAdded(true);
      setReqMsg({ msg: "Task added!", color: "blue-700" });
      setTimeout(() => {
        setReqMsg({ msg: "", color: "blue-700" });
      }, 1000);
      setMsg("");
    } catch (e) {
      setReqMsg({ msg: "Some error occurred!", color: "red-700" });
      setTimeout(() => {
        setReqMsg({ msg: "", color: "blue-700" });
      }, 1000);
    }
  };

  const validate = (e: ChangeEvent<HTMLInputElement>) => {
    const newVal = e.target.value;
    const oldVal = msg;
    const isBackspace =
      e.nativeEvent instanceof InputEvent &&
      e.nativeEvent.inputType === "deleteContentBackward";
    if (msg.length < 100 || isBackspace) {
      setMsg(newVal);
    } else {
      setMsg(oldVal);
    }
  };
  return { validate, insertTask, msgAdded };
};
