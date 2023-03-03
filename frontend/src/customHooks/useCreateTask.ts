import axios from 'axios'
export const useCreateTask = () => {
    const createTask = async (task: string) => {
      try {
        await axios.post("http://localhost:3000/api/v1/task/${taskId}", task);
      } catch (e) {
        console.log("error occurred!");
      }
    };
    return { createTask };
}