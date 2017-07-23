import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-saving-transaction',
  templateUrl: './saving-transaction.component.html',
  styleUrls: ['./saving-transaction.component.css']
})
export class SavingTransactionComponent implements OnInit {

  username: string;
  transactionList: Object[];

  constructor(private route: ActivatedRoute,
              private userService: UserService) {
    this.route.params.forEach((params: Params) => {
      this.username = params['username'];
    });
    this.getSavingTransactionList();
  }

  ngOnInit() {
  }

  getSavingTransactionList() {
    this.userService.getSavingsTransactionList(this.username)
      .subscribe(
        response => {
          console.log(JSON.parse(JSON.stringify(response))._body);
          this.transactionList = JSON.parse(JSON.parse(JSON.stringify(response))._body);
        },
        error => console.log(error)
      );
  }

}
