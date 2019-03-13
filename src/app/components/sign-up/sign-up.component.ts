import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/services/members/member.service';
import { IMember } from 'src/app/interfaces/member';
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
    private memberService: MemberService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  signup() {
    this.memberService.addMember(this.email, this.pwd, this.firstName, this.lastName); 
    this.router.navigate(['login'])
  }

  login(){
    this.router.navigate(['login'])
  }

}
