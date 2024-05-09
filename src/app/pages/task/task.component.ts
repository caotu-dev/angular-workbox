import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TasksActions } from 'src/app/_ngrx/task/task.actions';
import { selectTasks } from 'src/app/_ngrx/task/task.selectors';
import { TaskService } from 'src/app/_services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  tasks$ = this.store.select(selectTasks)
  todolist: any;
  constructor(
    private store: Store,
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.getTodoList()
  }

  getTodoList() {
    this.taskService.getList().subscribe((res) => {
      this.todolist = res;
      console.log(this.todolist)
    })
  }

  deleteTask(id: string): void {
    this.store.dispatch(TasksActions.removeTask({ taskId: id }))
  }
}
