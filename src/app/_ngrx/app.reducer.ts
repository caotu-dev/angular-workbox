import { combineReducers, ActionReducerMap } from "@ngrx/store";
import { taskReducer } from "./task/task.reducer";
import { Task } from "../_types/task";

interface AppState {
 tasks : Task
}

export const appReducer = combineReducers({
  tasks: taskReducer
})
