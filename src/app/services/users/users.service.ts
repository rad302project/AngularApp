import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IUser } from 'src/app/interfaces/users';
import { tap, catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "http://localhost:4200" })
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = "http://localhost:57229/api/Members/"
  // private apiUrl = "azurelink/api/DiscussionBoards"

  constructor(private http: HttpClient) { }
  
  getAllUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.apiUrl + '/getAllMembers').pipe(
      tap(users => console.log('fetched Users', users)),
      catchError(this.handleError('getAllUsers', []))
    );
  }

  getMemberByID(id: number): Observable<IUser> {
    const url = `${this.apiUrl}/Users/${id}`
    return this.http.get<IUser>(url).pipe(
      tap(_ => console.log(`fetched Member id=${id}`)),
      catchError(this.handleError<IUser>(`getMemberByID id=${id}`))
    );
  }

  addMember(user: IUser) {
    return this.http.post<IUser>(this.apiUrl + "/createUser", user, httpOptions).pipe(
      tap((newUser: IUser) => console.log(`added discussion w/ id=${newUser}`)),
      catchError(this.handleError<IUser>('addDiscussion'))
    );
  }

  updateMember(id: number, user: any): Observable<any> {
    const url = `${this.apiUrl}/Users/PUT/${id}`;
    return this.http.put(url, user).pipe(
      tap(_ => console.log(`updated Member id=${id}`)),
      catchError(this.handleError<any>('updateMember'))
    );
  }

  searchMember(searchTerm: string): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.apiUrl + '/getMembers/' + searchTerm).pipe(
      tap(searchedUsers => console.log('Searched Users', searchedUsers)),
      catchError(this.handleError('searchMember', []))
    );
  }

  // deleteMember(id: number): Observable<IUser> {
  //   const url = `${this.apiUrl}/Users/DELETE/${id}`;
  //   return this.http.delete<IUser>(url, httpOptions).pipe(
  //     tap(_ => console.log(`deleted member id=${id}`)),
  //     catchError(this.handleError<IUser>(`deleteMember`))
  //   );
  // }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);

      return of(result as T);
    };
  }
}
