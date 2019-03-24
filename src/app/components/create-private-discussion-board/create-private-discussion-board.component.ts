import { Component, OnInit } from '@angular/core';
import { IPrivateDiscussionBoard } from 'src/app/interfaces/private-discussion-board';

@Component({
  selector: 'app-create-private-discussion-board',
  templateUrl: './create-private-discussion-board.component.html',
  styleUrls: ['./create-private-discussion-board.component.css']
})
export class CreatePrivateDiscussionBoardComponent implements OnInit {

  privateDiscussionBoard: IPrivateDiscussionBoard;

  constructor() { }

  ngOnInit() {

  }

}
