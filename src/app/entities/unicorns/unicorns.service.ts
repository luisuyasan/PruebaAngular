import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http'
import { Observable } from 'rxjs';
import { AppConstants } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class UnicornsService {

  private resourceUrl = AppConstants.API_BASE_URL;
  private resourceID = AppConstants.API_ID;


  constructor(private http:HttpClient) {}

    queryUnicorns(): Observable<HttpResponse<any[]>>{
      return this.http.get<any[]>(this.resourceUrl +'/'+ this.resourceID + '/unicorns', {observe : 'response'});
    }

    getUnicorn(id:string): Observable<HttpResponse<any>>{
      return this.http.get<any[]>(this.resourceUrl + '/'+ this.resourceID + '/unicorns/'+ id, {observe : 'response'});
    }

    postUnicorns(unicorn:any): Observable<HttpResponse<any>>{
      let httpHeaders = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      return this.http.post<any>(this.resourceUrl + '/'+ this.resourceID + '/unicorns',unicorn, 
      {headers : httpHeaders, observe : 'response'});
    }

    putUnicorns(unicorn:any, id : String): Observable<HttpResponse<any>>{
      let httpHeaders = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      delete(unicorn._id);
      return this.http.put<any>(this.resourceUrl + '/'+ this.resourceID + '/unicorns/'+ id,unicorn, 
      {headers : httpHeaders, observe : 'response'});
    }

    deleteUnicorn(id:string): Observable<HttpResponse<any>>{
      return this.http.delete(this.resourceUrl+'/'+this.resourceID+'/unicorns/'+id,{observe : 'response'})
    }
}
