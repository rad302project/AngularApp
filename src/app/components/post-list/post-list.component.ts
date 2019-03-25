import { Component, OnInit, Input } from '@angular/core';
import { DiscussionBoardService } from 'src/app/services/discussion-board/discussion-board.service';
import { IPost } from 'src/app/interfaces/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input() discussionID: string
  private posts: IPost[];

  constructor(private discussionService: DiscussionBoardService) { }

  ngOnInit() {
    this.discussionService.getPostsForDiscussion(this.discussionID).subscribe(data => this.posts = data)
  }

}
