import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { IDiscussionBoard } from 'src/app/interfaces/discussion-board';
import { IPost } from 'src/app/interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class DiscussionBoardService {

  // private apiUrl = "http://localhost:57229/api/DiscussionBoards"
  // private postApiUrl = "http://localhost:57229/api/Posts"
  private apiUrl = "https://educomboardswebapi20190325102606.azurewebsites.net/api/DiscussionBoards"
  private postApiUrl = "https://educomboardswebapi20190325102606.azurewebsites.net/api/Posts"

  constructor(private http: HttpClient) { }

  getAllDiscussions(): Observable<IDiscussionBoard[]> {
    return this.http.get<IDiscussionBoard[]>(this.apiUrl + '/getDiscussions').pipe(
      tap(discussions => console.log('fetched discussions', discussions)),
      catchError(this.handleError('getAllDiscussions', []))
    );
  }

  getDiscussionByID(id: string) : Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
      tap(discussions => console.log('fetched discussions', discussions)),
      catchError(this.handleError('getAllDiscussions', []))
    );
  }

  getPostsForDiscussion(id: string) : Observable<IPost[]> {
    return this.http.get<IPost[]>(`${this.postApiUrl}/getPublicPostByBoardID/${id}`).pipe(
      tap(posts => console.log('fetched posts for discussion', posts)),
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

  createPost(post: IPost) : Observable<IPost> {
    console.log("post", { post })
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "http://localhost:4200" })
    };

    return this.http.post<IPost>(this.postApiUrl + "/createPublicPost", post, httpOptions).pipe(
      tap((post: IPost) => console.log(`added discussion w/ id=${post}`)),
      catchError(this.handleError<IPost>('addPost'))
    );
  }

  searchDiscussions(searchTerm: string): Observable<IDiscussionBoard[]> {
    return this.http.get<IDiscussionBoard[]>(this.apiUrl + '/getDiscussions/' + searchTerm).pipe(
      tap(searchedDiscussions => searchedDiscussions),
      catchError(this.handleError('searchDiscussions', []))
    );
  }

  deleteDiscussion(id: number): Observable<IDiscussionBoard> {
    console.log("deleting discussion ", id )
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "http://localhost:4200" })
    };

    return this.http.delete<IDiscussionBoard>(`${this.apiUrl}/${id}`, httpOptions).pipe(
      tap((deleteDiscussion: IDiscussionBoard) => console.log(`deleted discussion w/ id=${deleteDiscussion}`)),
      catchError(this.handleError<IDiscussionBoard>('deleteDiscussion'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    };
  }
}