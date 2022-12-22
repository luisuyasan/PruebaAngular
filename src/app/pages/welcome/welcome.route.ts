import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { NgModule } from '@angular/core';


const welcomeRoute:Routes = [
   {
     path: '',
     component:WelcomeComponent,
     data:{
        pageTitle: 'Bienvenidos'
     }
   }
]

@NgModule({
    imports: [RouterModule.forChild(welcomeRoute)],
    exports: [RouterModule]
})
export class WelcomeRouteModule{}