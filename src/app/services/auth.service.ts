import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  redirectUrl: string

  constructor() { }

  login(params: any) {
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        resolve({
          token: 'abcefgh1122'
        })
      }, 2000);
    })
  }

  isLoggedIn(): Boolean {
    return !!localStorage.getItem('token')
  }
}
