import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetStartedComponent } from './components/pages/get-started/get-started.component';

const routes: Routes = [
  { path: 'get-started', component: GetStartedComponent },
  { path: '',
    redirectTo: '/get-started',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
