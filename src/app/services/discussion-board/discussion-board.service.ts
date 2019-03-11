import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
      tap(discussions => console.log('fetched students', discussions)),
      catchError(this.handleError('getAllStudents', []))
    );
  }

  createDiscussion(discussion) {
    console.log("creating discussion", discussion, "to ", this.apiUrl + "/postDiscussion")

    return this.http.post<IDiscussionBoard>(this.apiUrl + "/postDiscussion", discussion)
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    };
  }
}
