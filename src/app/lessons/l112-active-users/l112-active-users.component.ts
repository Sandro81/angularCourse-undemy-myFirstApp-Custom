import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-l112-active-users',
  templateUrl: './l112-active-users.component.html',
  styleUrls: ['./l112-active-users.component.css']
})
export class L112ActiveUsersComponent implements OnInit {

  users: string[];

  constructor(private userService: UsersService) {}

  ngOnInit() {
    this.users = this.userService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.userService.setToInactive(id);
  }

}
