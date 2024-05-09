import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppService } from './app.service';
import { Observable, catchError, tap } from 'rxjs';
import { API_URL } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class TaskService extends AppService {

  constructor(
    private http : HttpClient
  ) {
    super()
  }

  getList() : Observable<any> {
    return this.http.get<any>(`${API_URL}todos`).pipe(
      tap(console.log),
      catchError(this.handleError)
    )
  }
}
