import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrivateDiscussionBoardsService } from 'src/app/services/private-discussion-boards/private-discussion-boards.service';
import { IPrivateDiscussionBoard, Member } from 'src/app/interfaces/private-discussion-board';
import { IPost } from 'src/app/interfaces/post';
import { PostService } from 'src/app/services/post/post.service';
import { MemberService } from 'src/app/services/members/member.service';

@Component({
  selector: 'app-private-discussion-board',
  templateUrl: './private-discussion-board.component.html',
  styleUrls: ['./private-discussion-board.component.css']
})
export class PrivateDiscussionBoardComponent implements OnInit {

  Title: string;
  Content: string;

  ID: string;
  privateDiscussionBoard: IPrivateDiscussionBoard
  posts: IPost[];
  members: Member[];
  constructor(private router: ActivatedRoute,
    private PDBService: PrivateDiscussionBoardsService,
    private postService: PostService,
    private memberService: MemberService) { }

  ngOnInit() {
    this.ID = this.router.snapshot.paramMap.get('ID');
    this.PDBService.getDiscussion(this.ID).subscribe(data => {
      this.privateDiscussionBoard = data, this.getBoards()
    })

  
  }
  createPrivateDiscussionPost(){
let post: IPost = {
  Title: this.Title,
  Content: this.Content,
  MemberID: 1,
  BoardID: this.privateDiscussionBoard.ID
}

this.postService.postPost(post);
  }

  getBoards(){
    this.postService.getPostsByBoardID(this.privateDiscussionBoard.ID).subscribe(data => {
      this.posts = data
    })
  }

  searchBoards(searchTerm: string){
    this.memberService.searchMembers(searchTerm).subscribe(data => {
      console.log(data)
    })
  }

  deletePost(id: number){
    this.postService.deleteDiscussion(id)
  }
}
