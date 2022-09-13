import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;

  constructor() { }

  login() : void {
    console.log('Login');
    this.loggedIn = true;
  }

  logout() : void {
    console.log('Logout');
    this.loggedIn = false;
  }

  isLoggedIn() : boolean {
    return this.loggedIn;
  }

  hasPermission(perm : string) : boolean {
    // check local token
    if (!this.isLoggedIn()) {
      // console.log('Not logged In so no check permission !')
      return false;
    }

    // console.log('Logged In and permission !')
    // appel http
    return true;
  }
}
