import { createReducer, on } from "@ngrx/store";

import { Task } from "src/app/_types/task";
import { TasksActions } from "./task.actions";

export const initialState: ReadonlyArray<Task> = [];

export const taskReducer = createReducer(
  initialState,
  on(TasksActions.removeTask, (state, {taskId}) => {
    const newTasks = state.filter(_ => _.id !== taskId);
    return [...newTasks]
  }),
  on(TasksActions.addTask, (state, {task}) => {
    return [...state, task]
  })

)
