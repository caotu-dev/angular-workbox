import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { UserComponent } from './user/user.component';
import { TaskComponent } from './task/task.component';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { HeaderComponent } from './layout/header/header.component';
import { AddTaskComponent } from './task/add-task/add-task.component';


@NgModule({
  declarations: [
    UserComponent,
    TaskComponent,
    PagesComponent,
    HeaderComponent,
    AddTaskComponent,
  ],
  bootstrap : [PagesComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    PagesRoutingModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
