import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import {userlist} from '../../userlist'

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {


  API_END_POINT='https://jsonplaceholder.typicode.com/usersfsdargfh'

  constructor(private http:HttpClient) { }

   boolean=new Subject<boolean>()
   error=new Subject<boolean>()
   message= new BehaviorSubject<string>('')


  getingUserdata():Observable<userlist[]>{
    return this.http.get<userlist[]> (this.API_END_POINT)
  }
}
