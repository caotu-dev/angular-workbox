import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { PagesModule } from './pages/pages.module';
import { ApiRequestInterceptor } from './_services/api-request.interceptor';
import { StoreModule } from '@ngrx/store';
import { taskReducer } from './_ngrx/task/task.reducer';
import { metaReducers } from './_ngrx/meta.reducer';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    PagesModule,
    RouterModule,
    StoreModule.forRoot({
      tasks : taskReducer
    }, {metaReducers})
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass: ApiRequestInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
