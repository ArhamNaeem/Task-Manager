import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { useCreateTask } from "./useCreateTask";


export const useInputCheck = (
  msg: string,
  setMsg: Dispatch<SetStateAction<string>>,
  msgAdded: boolean,
  setMsgAdded: Dispatch<SetStateAction<boolean>>,
  setReqMsg: Dispatch<SetStateAction<string>>
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
      setReqMsg("Task added!");
      setTimeout(() => {
        setReqMsg("");
      }, 1000);
      setMsg("");
    } catch (e) {
      setReqMsg('Some error occurred!');
      setTimeout(() => {
        setReqMsg("");
      }, 1000);
    }
  };

  const validate = (e: ChangeEvent<HTMLInputElement>) => {
    const newVal = e.target.value;
    const oldVal = msg;
    const isBackspace =
      e.nativeEvent instanceof InputEvent && e.nativeEvent.inputType ===
      "deleteContentBackward";
    if (msg.length < 100 || isBackspace ) {
      setMsg(newVal);
    } else {
      setMsg(oldVal);
    }
  };
  return { validate, insertTask, msgAdded };
};
