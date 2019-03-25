import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { IPrivateDiscussionBoard } from 'src/app/interfaces/private-discussion-board';
import { Observable, pipe, of } from 'rxjs';
import { IPost } from 'src/app/interfaces/post';
import { tap, catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  API: string = "http://localhost:57229/api/Posts";
  constructor(private httpClient: HttpClient) { }

  postPost(post: IPost){
    console.log("sending", post)
    return this.httpClient.post(this.API + "/createPrivatePost", post).subscribe(data => {
      console.log(data);
    },
      error => {

        console.log("Error", error);

      });
  }

  getPostsByBoardID(id: number): Observable<IPost[]>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "http://localhost:4200" }),
      };
   return this.httpClient.get<IPost[]>(this.API + "/getPostByBoardID/" + id, httpOptions);
  }

  deleteDiscussion(id: number){
    console.log("deleting" , id)
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "http://localhost:4200" }),
      };
    
    return this.httpClient.delete<IPost>(this.API + "/deletePrivatePost/" + id, httpOptions).pipe(
      tap((deleteDiscussion: IPost) => console.log(`deleted discussion w/ id=${deleteDiscussion}`)),
      catchError(this.handleError<IPost>('deleteDiscussion'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    };
  }
}
