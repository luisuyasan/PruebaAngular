import { Component, OnInit, ViewChild } from '@angular/core';
import { UnicornsService } from './unicorns.service';
import { UnicornsViewComponent } from './unicorns-view.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { UnicornsUpdateComponent } from './unicorns-update.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-unicorns',
  templateUrl: './unicorns.component.html',
  styleUrls: ['./unicorns.component.css']
})
export class UnicornsComponent implements OnInit {

  unicorns : any[] = [];
  displayedColumns: string[] = ['_id','name','color','edad','actions'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatSort) sort?:MatSort;
  @ViewChild(MatPaginator) paginator?: MatPaginator;

  constructor(
              private unicornService : UnicornsService,
              private dialog: MatDialog
              ) { }

  ngOnInit(): void {
    this.unicornService.queryUnicorns().subscribe(res => {
      if (res.body) {
        this.unicorns = res.body;
        this.dataSource.data = this.unicorns;
        this.dataSource.sort = this.sort!;
        this.dataSource.paginator = this.paginator!;
      }
    })
  }

  editUnicorn(unicorn?:any):void {
    const dialogRef = this.dialog.open(UnicornsUpdateComponent, {
      data : unicorn,
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
      if (data === 200 || data === 201) {
        this.ngOnInit();
      }
    });
  }

  viewUnicorn(id:string):void{
    this.unicornService.getUnicorn(id).subscribe( res =>{
      if (res.body) {
        this.dialog.open(UnicornsViewComponent, {
          data:res.body,
          width: '600px'
        });
      }
    });
  }

  deleteUnicorn(id:string):void{
    this.unicornService.deleteUnicorn(id).subscribe(res => {
      if(res.status == 200) this.ngOnInit()
    });
  }


}
