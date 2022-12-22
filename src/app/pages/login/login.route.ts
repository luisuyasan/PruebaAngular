import {  NgModule } from '@angular/core';
import { LoginComponent } from "./login.component";
import { RouterModule, Routes } from '@angular/router';

const loginRoute: Routes = [
    {
        path:'',
        component:LoginComponent,
        data:{
            pageTitle:'Bienvenidos'
        }
    }
]

@NgModule({
   imports:[RouterModule.forChild(loginRoute)]
})
export class LoginRouteModule{}