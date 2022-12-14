import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users : User[] = [];

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.userService.usersBehaviorObservable.subscribe((value) => this.users = value);
    this.userService.getUsers();
  }

}
