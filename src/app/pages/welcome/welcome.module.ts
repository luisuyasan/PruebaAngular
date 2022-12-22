import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { WelcomeComponent } from "./welcome.component";
import { WelcomeRouteModule } from "./welcome.route";
import {MatCardModule} from '@angular/material/card';
import {MatTableModule,} from '@angular/material/table';

@NgModule({
    imports: [WelcomeRouteModule, MatCardModule,MatTableModule],
    declarations: [WelcomeComponent],
    exports:[],
    providers:[],
    schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class welcomeModule{
    
}