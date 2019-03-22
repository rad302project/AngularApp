import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { IDiscussionBoard } from 'src/app/interfaces/discussion-board';

@Injectable({
  providedIn: 'root'
})
export class DiscussionBoardService {

  private apiUrl = "http://localhost:57229/api/DiscussionBoards"

  constructor(private http: HttpClient) { }

  getAllDiscussions(): Observable<IDiscussionBoard[]> {
    return this.http.get<IDiscussionBoard[]>(this.apiUrl + '/getDiscussions').pipe(
      tap(discussions => console.log('fetched discussions', discussions)),
      catchError(this.handleError('getAllDiscussions', []))
    );
  }

  createDiscussion(discussion: IDiscussionBoard): Observable<IDiscussionBoard> {
    console.log("discussion service", { discussion })
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "http://localhost:4200" })
    };

    return this.http.post<IDiscussionBoard>(this.apiUrl + "/postDiscussion", discussion, httpOptions).pipe(
      tap((newDiscussion: IDiscussionBoard) => console.log(`added discussion w/ id=${newDiscussion}`)),
      catchError(this.handleError<IDiscussionBoard>('addDiscussion'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    };
  }
}