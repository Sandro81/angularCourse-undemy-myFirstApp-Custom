import { Component, OnInit } from '@angular/core';
import { UserService } from '../users.service';
@Component({
  selector: 'app-l112-inactive-users',
  templateUrl: './l112-inactive-users.component.html',
  styleUrls: ['./l112-inactive-users.component.css']
})
export class L112InactiveUsersComponent implements OnInit {

  users: string[];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.userService.setToActive(id);
  }

}
