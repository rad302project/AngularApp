import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-discussion',
  templateUrl: './create-discussion.component.html',
  styleUrls: ['./create-discussion.component.css']
})
export class CreateDiscussionComponent implements OnInit {
  selected = "public"
  constructor() { }

  ngOnInit() {
    console.log(this.selected)
  }


}
