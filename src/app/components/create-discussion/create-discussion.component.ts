import { Component, OnInit } from '@angular/core';
import { IDiscussionBoard } from '../../interfaces/discussion-board';
import { DiscussionBoardService } from '../../services/discussion-board/discussion-board.service';

@Component({
  selector: 'app-create-discussion',
  templateUrl: './create-discussion.component.html',
  styleUrls: ['./create-discussion.component.css']
})
export class CreateDiscussionComponent implements OnInit {
  selected = "public"
  constructor(private discussionBoardService: DiscussionBoardService) { }

  ngOnInit() {  }

  createDiscussion(title, content) {
    let discussion : IDiscussionBoard = {
      Title: title,
      Content: content,
    }
    this.discussionBoardService.createDiscussion(discussion).subscribe(d => console.log("new discussion", discussion))
  }

}
