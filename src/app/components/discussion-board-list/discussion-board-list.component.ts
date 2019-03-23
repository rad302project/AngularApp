import { Component, OnInit } from '@angular/core';
import { IDiscussionBoard } from '../../interfaces/discussion-board';
import { DiscussionBoardService } from '../../services/discussion-board/discussion-board.service';

@Component({
  selector: 'app-discussion-board-list',
  templateUrl: './discussion-board-list.component.html',
  styleUrls: ['./discussion-board-list.component.css']
})
export class DiscussionBoardListComponent implements OnInit {
  currentlyOpenedItemIndex = -1;

  private discussions: IDiscussionBoard[]
  searchedDiscussions: IDiscussionBoard[]

  // discussions: IDiscussionBoard[] = [
  //   { title: 'Header 1',  content: 'Content 1' },
  //   { title: 'title 2',  content: 'Content 2' },
  //   { title: 'title 3',  content: 'Content 3' },
  //   { title: 'title 4',  content: 'Content 4' },
  //   { title: 'title 5',  content: 'Content 5' },
  //   { title: 'title 6',  content: 'Content 6' },
  //   { title: 'title 7',  content: 'Content 7' },
  //   { title: 'title 8',  content: 'Content 8' },
  //   { title: 'title 9',  content: 'Content 9' },
  //   { title: 'title 10',  content: 'Content 10' }
  // ];

 
  constructor(private discussionService: DiscussionBoardService) { }

  ngOnInit() {
    this.discussionService.getAllDiscussions().subscribe(data => {this.discussions = data})
  }

  setClosed(itemIndex) {
    if (this.currentlyOpenedItemIndex === itemIndex) {
      this.currentlyOpenedItemIndex = -1;
    }
  }
  setOpened(itemIndex) {
    this.currentlyOpenedItemIndex = itemIndex;
  }

  searchBoards(searchTerm:string):IDiscussionBoard[]{
    this.discussionService.searchDiscussions(searchTerm).subscribe(data => {this.searchedDiscussions = data});
    console.log(this.searchedDiscussions);
    return this.searchedDiscussions;
  }
}