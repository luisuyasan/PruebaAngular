import { Injectable } from '@angular/core';
import{ Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutheticationService {

  fakeUsername: string = "username";
  fakePasword: string = "password";
  
  constructor() { }

login(username:string, password:string): Observable<any>{
  if(username == this.fakeUsername && password == this.fakePasword){
    localStorage.setItem("token","mi-token-supersecreto")
    return of("ok")
  }else{
    return throwError(() => new Error('error')) 
    
  }
}

logout(): void{
localStorage.removeItem("token");
}

isLoggedIn(): boolean{
return localStorage.getItem("token") != null;
}
}
