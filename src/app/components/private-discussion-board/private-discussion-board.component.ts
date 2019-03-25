import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrivateDiscussionBoardsService } from 'src/app/services/private-discussion-boards/private-discussion-boards.service';
import { IPrivateDiscussionBoard } from 'src/app/interfaces/private-discussion-board';

@Component({
  selector: 'app-private-discussion-board',
  templateUrl: './private-discussion-board.component.html',
  styleUrls: ['./private-discussion-board.component.css']
})
export class PrivateDiscussionBoardComponent implements OnInit {

  ID: string;
  privateDiscussionBoard: IPrivateDiscussionBoard
  constructor(private router: ActivatedRoute,
    private PDBService: PrivateDiscussionBoardsService) { }

  ngOnInit() {
    this.ID = this.router.snapshot.paramMap.get('ID');
    this.PDBService.getDiscussion(this.ID).subscribe(data => {
      this.privateDiscussionBoard = data
    })
  }

}
