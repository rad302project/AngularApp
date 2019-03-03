import { Component, OnInit } from '@angular/core';
import { IDiscussionBoard } from '../interfaces/discussion-board';

@Component({
  selector: 'app-discussion-board-list',
  templateUrl: './discussion-board-list.component.html',
  styleUrls: ['./discussion-board-list.component.css']
})
export class DiscussionBoardListComponent implements OnInit {

  discussions: IDiscussionBoard[] = [
    { title: "discussion one", content: "here's some content for discussion 1" },
    { title: "discussion two", content: "here's some content  for discussion 2" },
    { title: "discussion three", content: "here's some content  for discussion 3" },
  ]

  constructor() { }

  ngOnInit() {
  }

}
