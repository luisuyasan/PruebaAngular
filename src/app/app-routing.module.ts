import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';

const routes: Routes = [
  {
    path: 'unicorns',
    loadChildren: () => import('./entities/unicorns/unicorns.module').then(m =>m.UnicornsModule),
    canActivate:[AuthenticationGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path:'welcome',
    loadChildren:() => import('./pages/welcome/welcome.module').then(m => m.welcomeModule),
    canActivate:[AuthenticationGuard]
  },
  {
    path:'',
    redirectTo: 'welcome',
    pathMatch:'full'
  },
  {
    path:'**',
    redirectTo:'welcome'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
