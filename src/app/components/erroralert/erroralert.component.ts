import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-erroralert',
  templateUrl: './erroralert.component.html',
  styleUrls: ['./erroralert.component.css']
})
export class ErroralertComponent implements OnInit{


  constructor(private userservice:UserServiceService, private router:Router){}
  message!:string
  ngOnInit(): void {
    this.userservice.message.subscribe((msg)=>{
      this.message=msg
    })
  }

  Gotohome(){
    this.userservice.error.next(false)
    this.userservice.boolean.next(false)
    this.router.navigate(['/']);
  }
}
