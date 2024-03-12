import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {userlist} from '../userlist'

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {


  API_END_POINT='https://jsonplaceholder.typicode.com/users'

  constructor(private http:HttpClient) { }

  getingUserdata():Observable<userlist[]>{
    return this.http.get<userlist[]> (this.API_END_POINT)
  }
}
