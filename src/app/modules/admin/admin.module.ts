import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UsersComponent } from './components/pages/users/users.component';
import { PostsComponent } from './components/pages/posts/posts.component';
import { UserFormComponent } from './components/pages/user-form/user-form.component';
import { UserListComponent } from './components/pages/user-list/user-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UIModule } from 'src/app/ui.module';
import { UserCardComponent } from './components/pages/user-card/user-card.component';


@NgModule({
  declarations: [
    UsersComponent,
    PostsComponent,
    UserFormComponent,
    UserListComponent,
    UserCardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    UIModule
  ]
})
export class AdminModule { }
