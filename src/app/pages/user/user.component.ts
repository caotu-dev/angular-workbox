import { Component } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  users: any;
  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getList()
  }

  getList() {
    this.userService.getList().subscribe((res) => this.users = res)
  }
}
