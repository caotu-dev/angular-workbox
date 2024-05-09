import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  handleError(error:HttpErrorResponse): Observable<any> {
    console.log(error);
    return throwError(error)
  }
}
