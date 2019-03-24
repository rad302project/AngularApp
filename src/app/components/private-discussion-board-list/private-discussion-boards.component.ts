import { Component, OnInit } from '@angular/core';
import { PrivateDiscussionBoardsService } from 'src/app/services/private-discussion-boards/private-discussion-boards.service';
import { IPrivateDiscussionBoard } from 'src/app/interfaces/private-discussion-board';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-private-discussion-boards-list',
  templateUrl: './private-discussion-boards.component.html',
  styleUrls: ['./private-discussion-boards.component.css']
})
export class PrivateDiscussionBoardsListComponent implements OnInit {

  privateDiscussions: IPrivateDiscussionBoard[];
  constructor(private PDBService: PrivateDiscussionBoardsService,
    private router: Router) { }

  ngOnInit() {
    this.PDBService.getAllDiscussions().subscribe(data => {
      this.privateDiscussions = data
    })
  }
  openPrivateDiscussion(ID: number){
    this.router.navigate(['/viewPrivateDiscussion', {ID: ID}])
  }
}
