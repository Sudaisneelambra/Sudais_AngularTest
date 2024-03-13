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
      if(Number(msg)==0){
        this.message='NetWork Error'
      } else if (Number(msg)==404) {
        this.message='Not found Error'
      } else {
        this.message='unknown Error'
      }
    })
  }

  Gotohome(){
    this.userservice.error.next(false)
    this.userservice.boolean.next(false)
    this.router.navigate(['/']);
  }
}
