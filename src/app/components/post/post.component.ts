import { Component, OnInit, Input } from '@angular/core';
import { IPost } from 'src/app/interfaces/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: IPost;

  constructor() { }

  ngOnInit() {
  }

}
