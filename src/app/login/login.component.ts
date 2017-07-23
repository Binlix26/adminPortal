import {Component, OnInit} from '@angular/core';
import {LoginService} from '../login.service';
import 'rxjs/Rx';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loggedIn: boolean;
  username: string;
  password: string;

  constructor(private loginService: LoginService) {
    if (localStorage.getItem('PortalAdminHasLoggedIn') == ''
      || localStorage.getItem('PortalAdminHasLoggedIn') == null) {
      this.loggedIn = false;
    } else {
      this.loggedIn = true;
    }
  }

  ngOnInit() {
  }

  onSubmit() {
    this.loginService.sendCredential(this.username, this.password)
      .subscribe(
        response => {
          this.loggedIn = true;
          localStorage.setItem('PortalAdminHasLoggedIn', 'true');
          location.reload();
        },
        error => console.log(error)
      );
  }

}
