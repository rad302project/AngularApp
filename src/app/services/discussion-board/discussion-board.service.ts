import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { IDiscussionBoard } from 'src/app/interfaces/discussion-board';

@Injectable({
  providedIn: 'root'
})
export class DiscussionBoardService {

  private apiUrl = "localhost:8080/api"

  constructor(private http: HttpClient) { }

  getAllDiscussions(): Observable<IDiscussionBoard[]> {
    return this.http.get<IDiscussionBoard[]>(this.apiUrl + '/DiscussionBoards').pipe(
      tap(discussions => console.log('fetched discussions', discussions)),
      catchError(this.handleError('getAllDiscussions', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    };
  }
}