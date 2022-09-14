import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../modules/admin/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersBehaviorSubject = new BehaviorSubject<User[]>([])
  usersBehaviorObservable = this.usersBehaviorSubject.asObservable();

  constructor(private httpClient : HttpClient) { }

  addUser(user : User) : void {
    this.usersBehaviorSubject.value.push(user);
  }

  getUsers() {
    this.httpClient.get<User[]>("https://jsonplaceholder.typicode.com/users").subscribe((data) => {
      this.usersBehaviorSubject.next(data);
    })
  }
}
