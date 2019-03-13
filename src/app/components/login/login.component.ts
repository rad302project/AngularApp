import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MemberService } from 'src/app/services/members/member.service';
import { IMember } from 'src/app/interfaces/member';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form;
  email: string;
  pwd: string;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private memberService: MemberService
  ) { 
    this.form = fb.group({
      id: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  login() {
    
  }

}
