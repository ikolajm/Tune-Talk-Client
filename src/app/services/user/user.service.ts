import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../../_models/user';
import { BehaviorSubject, Observable } from 'rxjs';
import {APIURL} from '../../environments/environment.prod';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  base = 'http://localhost:3000';
  public id: number;
  public role: string;
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  userId = ''

  constructor(private http: HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user.token')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
}

  // Login
  login(user) {
    return this.http.post<any>(`${APIURL}/user/signin`, user)
    .pipe(map(user=>{
      if(user && user.sessionToken){
        localStorage.setItem('token', user.sessionToken)
        this.userId = user.user.id
        localStorage.setItem('role', user.user.role)
        localStorage.setItem('userId', user.user.id)
        
        this.role=user.user.role;
        console.log(user);
      }
      return user
    }))
  }

  // Singup
  signup(user) {
    return this.http.post<any>(`${APIURL}/user/signup`, user)
    .pipe(map(user=>{
      if(user && user.sessionToken){
        localStorage.setItem('token', user.sessionToken)
        this.id=user.user.id;
        this.userId = user.user.id
        localStorage.setItem('userId', this.userId)
        this.role=user.user.role
      }
      return user;
      
  }))
}

  //Logout
  logout() {
    localStorage.clear()
    this.id = undefined;
    this.role = undefined;
    this.userId = undefined
    this.currentUserSubject.next(null);
  }
  
  // View single page
  findUser(id) {
    return this.http.get(`${APIURL}/user/${id}`)
  }
  // Update
  updateUser(id, user) {
    return this.http.put(`${APIURL}/user/edit/${id}`, user)
  }
  // Delete
  deleteUser(id) {
    return this.http.delete(`${APIURL}/user/delete/${id}`)
  }
  // Delete (admin)
  adminDeleteUser(id) {
    return this.http.delete(`${APIURL}/user/delete/${id}/admin`)
  }
}
