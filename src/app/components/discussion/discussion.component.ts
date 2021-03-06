import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDiscussionBoard } from 'src/app/interfaces/discussion-board';
import { DiscussionBoardService } from 'src/app/services/discussion-board/discussion-board.service';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.css']
})
export class DiscussionComponent implements OnInit {

  public discussion: IDiscussionBoard;
  public discussionID: string;
  constructor(private route: ActivatedRoute, private discussionService: DiscussionBoardService) {
    console.log("test", this.route.snapshot.paramMap)
    
    this.discussionID = this.route.snapshot.paramMap.get("id")
    console.log(this.discussionID)
   }

  ngOnInit() {
    this.discussionService.getDiscussionByID(this.discussionID).subscribe(data => this.discussion = data)
  }

  delete(id) {
    this.discussionService.deleteDiscussion(id).subscribe(data => console.log("deleting ", data))
  }

}
