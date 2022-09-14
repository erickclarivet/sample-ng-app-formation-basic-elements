import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

export interface Credentials {
  email : string;
  pwd : string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInSubject = new BehaviorSubject(false);
  public loggedInObservable = this.loggedInSubject.asObservable();

  constructor() { }

  login(credentials : Credentials) : void {
    console.log('Login with :', credentials);
    this.loggedInSubject.next(true);
  }

  logout() : void {
    console.log('Logout');
    this.loggedInSubject.next(false);
  }

  isLoggedIn() : boolean {
    return this.loggedInSubject.value;
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
