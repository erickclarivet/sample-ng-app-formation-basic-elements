import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../modules/admin/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersBehaviorSubject = new BehaviorSubject<User[]>([])
  usersBehaviorObservable = this.usersBehaviorSubject.asObservable();

  constructor() { }

  addUser(user : User) : void {
    this.usersBehaviorSubject.value.push(user);
  }
}
