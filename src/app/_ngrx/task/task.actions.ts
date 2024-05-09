import { createActionGroup, props } from "@ngrx/store";
import { Task } from "src/app/_types/task";

export const TasksActions = createActionGroup({
  source : 'Tasks',
  events : {
    'Add task' : props<{task:Task}>(),
    'Remove task' : props<{taskId:string}>(),
  }
})
