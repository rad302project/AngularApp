import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private isLogged = false;
  private subscription: any;

  form;
  userPasswordInput: string;
  userEmailInput: string;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthenticationService
  ) {
    this.form = fb.group({
      userEmailInput: ['', Validators.required],
      userPasswordInput: ['', Validators.required]
    })
  }

  ngOnInit() {
    this.isLogged = this.authService.isLoggedIn;
    this.authService.onLoginChanged.subscribe(loginSuccess => {
      this.isLogged = loginSuccess;
    });
  }

  login(): void {
    console.log("sending", this.userEmailInput, this.userPasswordInput)
    this.authService.login(this.userEmailInput, this.userPasswordInput)
    .subscribe(
      resultData => {
        this.isLogged = !!resultData;
        console.log(resultData);
        if(this.isLogged){
          this.router.navigate(['']);
        }
      },
      err => {
        console.log(err);
      });

  }

  logout(): void {
    this.authService.logout();
  }

  get isLoggedIn(): boolean {
    return this.isLogged;
  }


}
