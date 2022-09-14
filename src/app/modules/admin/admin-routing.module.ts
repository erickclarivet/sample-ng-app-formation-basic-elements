import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './components/pages/posts/posts.component';
import { UserFormComponent } from './components/pages/user-form/user-form.component';
import { UsersComponent } from './components/pages/users/users.component';

const routes: Routes = [
  { path : 'users', component: UsersComponent},
  { path : 'user', component: UserFormComponent},
  { path : 'posts', component: PostsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
