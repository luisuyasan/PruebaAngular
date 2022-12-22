import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { LoginComponent } from "./login.component";
import { LoginRouteModule } from "./login.route";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
    imports: [LoginRouteModule,
             MatFormFieldModule,
             MatInputModule,
             MatSelectModule,
             MatButtonModule,
             MatSnackBarModule,
             FormsModule,
             MatSnackBarModule,
             MatToolbarModule
            ],
    declarations: [LoginComponent],
    providers:[],
    schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginModule{}