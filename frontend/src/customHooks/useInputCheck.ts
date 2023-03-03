import { useState } from "react";
import { useCreateTask } from "./useCreateTask";

export const useInputCheck = (msg: string, setMsg: any, msgAdded:any,setMsgAdded:any) => {
    const { createTask} = useCreateTask();
    const insertTask = (e: any) => {
        if (!msg || !msg.trim()) {
            return;
        }
     
        if (e.type === "keydown" && e.code !== "Enter") {
            return;
        }
        createTask(msg);
        setMsgAdded(true)
        setMsg("");
    };
    
    const validate = (e: any) => {
        const newVal = e.target.value;
        const oldVal = msg;
        const isBackspace = e.nativeEvent.inputType === 'deleteContentBackward';
        if (msg.length < 100 || isBackspace) {
            setMsg(newVal);
        } else {
            setMsg(oldVal)
        }
    }
   return {validate,insertTask,msgAdded}
}