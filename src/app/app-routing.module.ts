import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetStartedComponent } from './components/pages/get-started/get-started.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'get-started', component: GetStartedComponent },
  // always at the end
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
