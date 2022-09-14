import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { GetStartedComponent } from './components/pages/get-started/get-started.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home page'},
  { path: 'get-started', component: GetStartedComponent, title: 'Get started page' },
  { path: 'login', component: LoginFormComponent, title: 'Login' },

  // Lazy loading:  module indépendant, chargé que si besoin
  { path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),
    canLoad: [AdminGuard]
  },
  // always at the end
  { path: '**', component: NotFoundComponent, title: 'Not found page' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    // { preloadingStrategy: PreloadAllModules } // Si activé, pré charge tous les modules dans le HOME
    )],
  exports: [RouterModule],

})
export class AppRoutingModule { }
