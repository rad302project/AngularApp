import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IPrivateDiscussionBoard } from 'src/app/interfaces/private-discussion-board';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrivateDiscussionBoardsService {

  API: string = "http://localhost:57229/api/PrivateDiscussionBoards"

  constructor(private httpclient: HttpClient) { }

  postPrivateDiscussion(privateDiscussion: IPrivateDiscussionBoard) {
    console.log(privateDiscussion)
    return this.httpclient.post(this.API + "/postDiscussion", privateDiscussion).subscribe(data => {
      console.log(data);
    },
      error => {

        console.log("Error", error);

      });
  }



  getAllDiscussions(): Observable<IPrivateDiscussionBoard[]> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "http://localhost:4200" })
    };

    return this.httpclient.get<IPrivateDiscussionBoard[]>(this.API + "/getAllPrivateDiscussions", httpOptions)
  }

  
  getDiscussion(id: string): Observable<IPrivateDiscussionBoard> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "http://localhost:4200" })
    };

    return this.httpclient.get<IPrivateDiscussionBoard>(this.API + "/getDiscussionByID", httpOptions,)
  }
}
