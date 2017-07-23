import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  userList: Object[];

  constructor(private userService: UserService,
              private router: Router) {
    this.getUsers();
  }

  ngOnInit() {
  }

  getUsers() {
    this.userService.getUsers()
      .subscribe(
        response => {
          // console.log(JSON.parse(JSON.stringify(response)));
          this.userList = JSON.parse(JSON.parse(JSON.stringify(response))._body);
        },
        error => console.log(error)
      );
  }

  onSelectPrimary(username: string) {
    this.router.navigate(['/primaryTransaction', username]);
  }

  onSelectSavings(username: string) {
    this.router.navigate(['/savingsTransaction', username]);
  }

  enableUser(username: string) {
    this.userService.enableUser(username).subscribe();
    location.reload();
  }

  disableUser(username: string) {
    this.userService.disableUser(username).subscribe();
    location.reload();
  }

}
