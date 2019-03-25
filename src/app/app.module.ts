import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
// import { StudentService } from './services/student.service';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DiscussionBoardComponent } from './components/discussion-board/discussion-board.component';
import { DiscussionBoardListComponent } from './components/discussion-board-list/discussion-board-list.component';


import { FlexLayoutModule } from "@angular/flex-layout"

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { CreateDiscussionComponent } from './components/create-discussion/create-discussion.component';
import { PrivateDiscussionBoardsListComponent } from '../app/components/private-discussion-board-list/private-discussion-boards.component'
import { UserComponent } from './components/user/user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { CreatePrivateDiscussionBoardComponent } from './components/create-private-discussion-board/create-private-discussion-board.component';
import { PrivateDiscussionBoardComponent } from './components/private-discussion-board/private-discussion-board.component';
import { DiscussionComponent } from './components/discussion/discussion.component';
import { PostComponent } from './components/post/post.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { AddPostComponent } from './components/add-post/add-post.component';

library.add(far, fas);
const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "discussions" },
  { path: "discussions", component: DiscussionBoardListComponent },
  { path: "discussion/:id", component: DiscussionComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignUpComponent },
  { path: "create", component: CreateDiscussionComponent },
  { path: "createPrivateDiscussion", component: CreatePrivateDiscussionBoardComponent },
  { path: "viewPrivateDiscussion", component: PrivateDiscussionBoardComponent },
  { path: "viewPrivateDiscussionList", component: PrivateDiscussionBoardsListComponent },
  { path: "**", redirectTo: "login" },

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    DashboardComponent,
    DiscussionBoardComponent,
    DiscussionBoardListComponent,
    CreateDiscussionComponent,
    PrivateDiscussionBoardsListComponent,
    UserComponent,
    UserListComponent,
    CreatePrivateDiscussionBoardComponent,
    PrivateDiscussionBoardComponent,
    DiscussionComponent,
    PostComponent,
    PostListComponent,
    AddPostComponent
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
  providers: [HttpClient,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
