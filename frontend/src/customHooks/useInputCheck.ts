import { useState } from "react";

export const useInputCheck = (msg:string,setMsg:any) => {
    const insertTask = (e: any) => {
        if (!msg) {
            return;
        }
        if (e.type === "keydown" && e.code !== "Enter") {
            return;
        }
        console.log(msg);
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
   return {validate,insertTask}
}