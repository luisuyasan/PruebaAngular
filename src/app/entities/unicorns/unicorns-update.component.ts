import { Component, Inject, OnInit } from '@angular/core';
import { ɵNgNoValidate } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { subscribeOn } from 'rxjs';
import { UnicornsService } from "./unicorns.service";

@Component({
    selector : 'app-unicorns-update',
    templateUrl : './unicorns-update.component.html'
})
export class UnicornsUpdateComponent implements OnInit {
    
    constructor(
        private dialogRef: MatDialogRef<UnicornsUpdateComponent>,
        @Inject(MAT_DIALOG_DATA) public unicorn:any,
        private unicornsService : UnicornsService

    ) {}

    ngOnInit(): void {
        if(!this.unicorn) this.unicorn = {name: "", age: undefined, colour : ""};
    }

    getData(event : any):void{
        this.unicorn.name = event;
    }

    getColor(event : any): void{
        this.unicorn.colour = event;
    }

    getEdad(event:any):void{
        this.unicorn.age = event;
    }

    save():void{
        if(this.unicorn && this.unicorn._id){
            this.unicornsService.putUnicorns(this.unicorn,this.unicorn._id).subscribe(res => {
                this.dialogRef.close(res.status);
            });
        }else{
            this.unicornsService.postUnicorns(this.unicorn).subscribe(res => {
                this.dialogRef.close(res.status);
            });
        }
    }   
}
