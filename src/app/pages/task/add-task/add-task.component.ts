import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TasksActions } from 'src/app/_ngrx/task/task.actions';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  taskForm! : FormGroup
  submitted: boolean = false;

  constructor(
    private fb : FormBuilder,
    private store : Store
  ) {}

  ngOnInit(): void {
      this.taskForm = this.fb.group({
        description : ['', Validators.required]
      })
  }

  get tForm() {
    return this.taskForm.controls;
  }

  createTask() {
    if(this.taskForm.valid) {
      const task = this.taskForm.value;
      task.id = Math.random().toString();
      this.store.dispatch(TasksActions.addTask({task: task}));
      this.taskForm.reset()
    }
  }
}
