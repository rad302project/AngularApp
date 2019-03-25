import { Component, OnInit, Input } from '@angular/core';
import { DiscussionBoardService } from 'src/app/services/discussion-board/discussion-board.service';
import { IPost } from 'src/app/interfaces/post';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {


  @Input() discussionID: number;

  constructor(private discussionService: DiscussionBoardService) { }

  ngOnInit() {
  }

  createPost(title, content) {
    let post: IPost = {
      Title: title,
      Content: content,
      BoardID: this.discussionID,
      MemberID: 1
    }
    this.discussionService.createPost(post).subscribe(data => console.log("new post" ,post ))
  }

}
