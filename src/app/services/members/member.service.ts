import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MemberService {

  API: string = "http://localhost:57229/api/Members"
  constructor(private http: HttpClient) { }

  searchMembers(membername: string): Observable<any[]>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "http://localhost:4200" }),
      };
  return  this.http.get<any[]>(this.API + "/getMembers/" + membername, httpOptions)
  }
}
