import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userName = "";
  userNameOutput = "";
  status: boolean = false;

  constructor() {
    this.checkStatus();
  }

  ngOnInit() {
  }

  showUserName() {
    this.userNameOutput = this.userName;
    this.userName = null;
    setInterval(() => {
      this.userNameOutput = null;
    }, 2000);
  }

  onUpdateUsername(event: any) {
    this.userName = event.target.value;
  }

  checkStatus() {
    if (this.userName === "" || this.userName === null) {
      this.status = true;
    }
    else {
      this.status = false;
    }
  }

}
