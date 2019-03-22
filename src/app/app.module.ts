import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { StudentComponent } from './components/student/student.component';
// import { StudentService } from './services/student.service';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DiscussionBoardComponent } from './discussion-board/discussion-board.component';
import { DiscussionBoardListComponent } from './discussion-board-list/discussion-board-list.component';

import {FlexLayoutModule} from "@angular/flex-layout"

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { CreateDiscussionComponent } from './create-discussion/create-discussion.component';

library.add(far, fas);
const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "home", component: DiscussionBoardListComponent },
  { path: "discussions", component: DiscussionBoardListComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignUpComponent },
  { path: "create", component: CreateDiscussionComponent },
  { path: "**", redirectTo: "login" }
];

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    LoginComponent,
    SignUpComponent,
    DashboardComponent,
    DiscussionBoardComponent,
    DiscussionBoardListComponent,
    CreateDiscussionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    FlexLayoutModule,
    FontAwesomeModule
  ],
  providers: [ HttpClient, 
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
