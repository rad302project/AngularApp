import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrivateDiscussionBoardsService {

  API: string = "http://localhost:57229/api/PrivateDiscussionBoards"

  constructor(private httpclient: HttpClient) { }

  postPrivateDiscussion(Title: string, Content: string){

this.httpclient.post(this.API + "/postDiscussion")
  }
}
