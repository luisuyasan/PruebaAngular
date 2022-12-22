import { Routes, RouterModule } from '@angular/router';
import { UnicornsComponent } from './unicorns.component';
import { NgModule } from '@angular/core';


const unicornsRoute:Routes = [
   {
     path: '',
     component:UnicornsComponent,
     data:{
        pageTitle: 'Bienvenidos'
     }
   }
]

@NgModule({
    imports: [RouterModule.forChild(unicornsRoute)],
    exports: [RouterModule]
})
export class UnicornsRouteModule{}