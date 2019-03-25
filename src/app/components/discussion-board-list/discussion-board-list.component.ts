import { Component, OnInit } from '@angular/core';
import { IDiscussionBoard } from '../../interfaces/discussion-board';
import { DiscussionBoardService } from '../../services/discussion-board/discussion-board.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-discussion-board-list',
  templateUrl: './discussion-board-list.component.html',
  styleUrls: ['./discussion-board-list.component.css']
})
export class DiscussionBoardListComponent implements OnInit {
  currentlyOpenedItemIndex = -1;

  private discussions: IDiscussionBoard[]
  public searchedDiscussions: IDiscussionBoard[]
 
  constructor(private discussionService: DiscussionBoardService, private router: Router) { }

  ngOnInit() {
    this.discussionService.getAllDiscussions().subscribe(data => {this.discussions = data})
  }

  viewDiscussion(discussion){
    console.log(discussion)
    this.router.navigate(["/discussion", discussion.ID])
  }

  searchBoards(searchTerm:string):IDiscussionBoard[]{
    this.discussionService.searchDiscussions(searchTerm).subscribe(data => {this.searchedDiscussions = data});
    return this.searchedDiscussions;
  }
}