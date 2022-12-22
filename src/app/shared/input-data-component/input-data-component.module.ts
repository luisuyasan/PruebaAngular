import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { InputDataComponentComponent } from './input-data-component.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
    imports:[
        MatInputModule,
        FormsModule,
        MatFormFieldModule
    ],
    declarations:[InputDataComponentComponent],
    providers:[],
    schemas:[CUSTOM_ELEMENTS_SCHEMA],
    exports:[InputDataComponentComponent]
})

export class inputDataComponentModule{

}