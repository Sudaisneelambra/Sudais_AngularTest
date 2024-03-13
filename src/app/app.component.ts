import { Component, OnInit } from '@angular/core';
import { UserServiceService } from './services/user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'atDriveAssignment';
  
  bool:boolean = false;
  error:boolean = false;
  constructor(private userservice:UserServiceService){}

  ngOnInit(): void {
      this.userservice.boolean.subscribe((val)=> {
        setTimeout(()=> {
        this.bool = val;
      }, 0);
    })

    this.userservice.error.subscribe((val)=>
    this.error=val
   )
  }
}
