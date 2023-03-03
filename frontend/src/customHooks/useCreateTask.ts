import axios from 'axios'
import { useState } from 'react';
import { useGetTask } from './useGetTask';
export const useCreateTask = () => {
    const createTask = async (task: string) => {
      try {
        await axios.post('http://localhost:3000/api/v1/task', {
          task
        });
      } catch (e) {
        console.log("error occurred!");
      }
    };
    return { createTask };
}