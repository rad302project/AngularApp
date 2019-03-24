import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-private-discussion-board',
  templateUrl: './private-discussion-board.component.html',
  styleUrls: ['./private-discussion-board.component.css']
})
export class PrivateDiscussionBoardComponent implements OnInit {

  ID: string;
  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
   this.ID = this.router.snapshot.paramMap.get('ID');
    console.log(this.ID)
  }

}
