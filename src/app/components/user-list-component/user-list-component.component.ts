import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserServiceService } from '../../services/user-service.service';
import { userlist } from '../../../userlist';

@Component({
  selector: 'app-user-list-component',
  templateUrl: './user-list-component.component.html',
  styleUrls: ['./user-list-component.component.css'],
})
export class UserListComponentComponent implements OnInit, OnDestroy {
  userList$ = new Subscription();
  userdata: userlist[] = [];
  temp: userlist[] = [];
  name = '';
  email = '';
  booleanvalue!: boolean;

  constructor(private userservice: UserServiceService) {}

  ngOnInit(): void {
    try {
      this.userservice.boolean.subscribe((value: boolean) => {
        this.booleanvalue = value;
      });

      this.userservice.boolean.next(true);
      this.userList$ = this.userservice.getingUserdata().subscribe({
        next: (res) => {
          this.userdata = res;
          this.temp = res;
          this.userservice.boolean.next(false);
        },
        error: (err) => {
          this.userservice.error.next(true);
          this.userservice.boolean.next(false);
          this.userservice.message.next(err.status)
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  // keyup function for searching name
  namesearch() {
    this.userdata = this.temp?.filter((e: userlist) => {
      return e.name?.toLocaleLowerCase().includes(this.name.toLowerCase());
    });
    if (this.email?.trim().length > 0) {
      this.userdata = this.userdata.filter((e: userlist) => {
        return e.email?.toLocaleLowerCase().includes(this.email.toLowerCase());
      });
    }
  }

  // keyup function for searching mail
  mailsearch() {
    this.userdata = this.temp?.filter((e: userlist) => {
      return e.email?.toLocaleLowerCase().includes(this.email.toLowerCase());
    });
    if (this.name?.trim().length > 0) {
      this.userdata = this.userdata.filter((e: userlist) => {
        return e.name?.toLocaleLowerCase().includes(this.name.toLowerCase());
      });
    }
  }

  ngOnDestroy(): void {
    this.userList$?.unsubscribe();
  }
}
