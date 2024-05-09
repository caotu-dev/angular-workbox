import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  setAuth(data:any) {
    localStorage.setItem('auth_user', JSON.stringify(data));
  }

  #getAuth() {
    const auth: any = localStorage.getItem('auth_user');
    return auth ?? null;
  }

  getToken() {
    return this.#getAuth()?.access_token ?? null;
  }

  getUser() {
    return this.#getAuth() ?? null;
  }

}
