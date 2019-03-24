import { Component, OnInit } from '@angular/core';
import { IPrivateDiscussionBoard } from 'src/app/interfaces/private-discussion-board';
import { PrivateDiscussionBoardsService } from 'src/app/services/private-discussion-boards/private-discussion-boards.service';

@Component({
  selector: 'app-create-private-discussion-board',
  templateUrl: './create-private-discussion-board.component.html',
  styleUrls: ['./create-private-discussion-board.component.css']
})
export class CreatePrivateDiscussionBoardComponent implements OnInit {

  Title: string;
  Content: string;

  constructor(private PDBService: PrivateDiscussionBoardsService) { }

  ngOnInit() {

  }
  createPrivateDiscussion() {
    console.log("bouta make one")
let PDB: IPrivateDiscussionBoard = {
  Title: this.Title,
  Content: this.Content
}

    this.PDBService.postPrivateDiscussion(PDB)
  }

}
