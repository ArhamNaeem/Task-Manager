import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { useGetTask } from '../customHooks/useGetTask';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faTrash);
import { useDeleteTask } from '../customHooks/useDeleteTask';
 

const ShowAllTasks = () => {
   const [taskId, setTaskId] = useState("");
   const { taskData } = useGetTask();
   const { giveTaskID } = useDeleteTask(); 

  return (
    <>
      <h1 className="text-center text-3xl my-2 font-semibold text-blue-600 drop-shadow-sm ">
        Tasks to be done
      </h1>
      { taskData?.map((task) => (
          <div
            className="flex justify-between text-blue-600 my-5 m-auto text-xl font-semibold border border-blue-100 shadow-md w-4/5 py-4 px-10  "
            key={task._id}
          >
            {task?.task}
            <button
            onClick={() => {
              giveTaskID(task._id);
             
            }
            }
            >
              <FontAwesomeIcon icon="trash" />
            </button>
          </div>
        ))
       }
    </>
  );
};

export default ShowAllTasks
