import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../shared/models/User.model';
import { AuthInterceptor } from './AuthInterceptor';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  Url = 'http://localhost:3000'

  constructor(
    private httpclient: HttpClient,
  ) {
  }
  user(form: User) {
    console.log(form)
    return this.httpclient.post<User>(`${this.Url}/api/users`, form)
  }


  getuser(): Observable<User> {
    return this.httpclient.get<User>(`${this.Url}/api/users`)
  }
  getuserById(id: number): Observable<User> {
    return this.httpclient.get<User>(`${this.Url}/api/users/${id}`)
  }
  updateuser( form: User): Observable<User> {
    console.log(form)
    return this.httpclient.put<User>(`${this.Url}/api/users`, form)
  }
  delete(id: number): Observable<User> {
    return this.httpclient.delete<User>(`${this.Url}/users/${id}`)
  }
}
