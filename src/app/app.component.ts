import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutheticationService } from './authetication.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myproyectwork';

  constructor(private authService:AutheticationService,
              private router:Router
  ){}

  isAuthenticated(): boolean{
    return this.authService.isLoggedIn();
  }

  logout(): void{
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}


