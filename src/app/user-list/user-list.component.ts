import { Component, OnInit } from '@angular/core';
import { IUser } from '../interfaces/users';
import { UsersService } from '../services/users/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  private users: IUser[]

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getAllUsers().subscribe(users => this.users = users)
  }

}
