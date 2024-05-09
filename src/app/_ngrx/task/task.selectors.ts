import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Task } from "src/app/_types/task";

export const selectTasks = createFeatureSelector<ReadonlyArray<Task>>('tasks')
