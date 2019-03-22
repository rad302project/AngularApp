import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  firstName: string;
  lastName: string;
  pwd: string;
  email: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  signup() {
       this.router.navigate(['login'])
  }

  login(){
    this.router.navigate(['login'])
  }

}
