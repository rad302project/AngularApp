import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPrivateDiscussionBoard } from 'src/app/interfaces/private-discussion-board';

@Injectable({
  providedIn: 'root'
})
export class PrivateDiscussionBoardsService {

  API: string = "http://localhost:57229/api/PrivateDiscussionBoards"

  constructor(private httpclient: HttpClient) { }

  postPrivateDiscussion(privateDiscussion: IPrivateDiscussionBoard) {
    console.log(privateDiscussion)
    return this.httpclient.post(this.API + "/postDiscussion", privateDiscussion).subscribe(data => {
      console.log( data);
    },
      error => {

        console.log("Error", error);

      });
  }
}
