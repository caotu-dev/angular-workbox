import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : 'auth',
    loadChildren : () => import('./auth/auth-routing.module').then(m => m.AuthRoutingModule)
  },
  {
    path : '',
    pathMatch : 'full',
    loadChildren : () => import('./pages/pages-routing.module').then(m => m.PagesRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
