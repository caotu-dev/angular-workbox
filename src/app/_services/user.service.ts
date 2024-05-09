import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
import { API_URL } from '../constants';
import { AppService } from './app.service';
import { Register, Login } from '../_types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService extends AppService {

  constructor(
    private http : HttpClient
  ) {
    super()
  }

  register(data : Register) : Observable<Register> {
    return this.http.post<Register>(`${API_URL}/user/register`, data).pipe(
      tap(console.log),
      catchError(this.handleError)
    )
  }

  login(data : Login) : Observable<Login> {
    return this.http.post<Register>(`${API_URL}/user/login`, data).pipe(
      tap(console.log),
      catchError(this.handleError)
    )
  }

  getList() : Observable<any> {
    return this.http.get<any>(`${API_URL}users`).pipe(
      tap(console.log),
      catchError(this.handleError)
    )
  }
}
