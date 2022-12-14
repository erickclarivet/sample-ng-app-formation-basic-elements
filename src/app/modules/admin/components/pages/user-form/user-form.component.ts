import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user-service.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  userForm = new FormGroup({
    name: new FormControl('', [ Validators.required, Validators.min(3) ]),
    email: new FormControl('', [ Validators.required, Validators.email, Validators.min(3) ]),
    id : new FormControl('') // To auto generate
  });

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    // to do : add to usersService
  }

  submit(formDirective: FormGroupDirective) : void { //wtf ? obligé de passer par une variable template
    const newUser = this.userForm.value;
    this.userService.addUser(newUser as User);
    this.userForm.reset();
    formDirective.resetForm();
  }

}
