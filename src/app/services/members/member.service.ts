import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators'
import { IMember } from 'src/app/interfaces/member';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
const apiUrl = "http://localhost:8080/api";

@Injectable({
  providedIn: 'root'
})
export class MemberService {

    constructor(private http: HttpClient) { }
  
    getAllMembers(): Observable<IMember[]> {
      return this.http.get<IMember[]>(apiUrl + '/Member').pipe(
        tap(students => console.log('fetched Members')),
        catchError(this.handleError('getAllMembers', []))
      );
    }
  
    getMemberByID(id: number): Observable<IMember> {
      const url = `${apiUrl}/Members/${id}`
      return this.http.get<IMember>(url).pipe(
        tap(_ => console.log(`fetched Member id=${id}`)),
        catchError(this.handleError<IMember>(`getMemberByID id=${id}`))
      );
    }
  
    addMember(email: string, password: string, firstName: string, lastName: string): Observable<IMember> {
      // const url = `${apiUrl}/Members/POST/`;
      // return this.http.post<IMember>(url, member, httpOptions).pipe(
      //   tap((memberRes: IMember) => console.log(`added Member w/ id=${memberRes.id}`)),
      //   catchError(this.handleError<IMember>('addMember'))
      // );
      let body = JSON.stringify({email, password, firstName, lastName});

      let httpOptions: { 
        headers: HttpHeaders({
        'Content-Type', 'appliction/json'
      }) 
    };

      return this.http.post(apiUrl + "/accounts", {headers: headers, params: params, responseType: 'json'})
    }
  
    updateMember(id: number, lecturer: any): Observable<any> {
      const url = `${apiUrl}/Members/PUT/${id}`;
      return this.http.put(url, lecturer, httpOptions).pipe(
        tap(_ => console.log(`updated Member id=${id}`)),
        catchError(this.handleError<any>('updateMember'))
      );
    }
  
    deleteMember(id: number): Observable<IMember> {
      const url = `${apiUrl}/Members/DELETE/${id}`;
      return this.http.delete<IMember>(url, httpOptions).pipe(
        tap(_ => console.log(`deleted member id=${id}`)),
        catchError(this.handleError<IMember>(`deleteMember`))
      );
    }
  
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.log(error);
  
        return of(result as T);
      };
    }
}