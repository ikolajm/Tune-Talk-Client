import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../../_models/user';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  base = 'http://localhost:3000';
  public id: number;
  public role: string;
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user.token')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
}

  // Login
  login(user) {
    return this.http.post<any>(`${this.base}/user/signin`, user)
    .pipe(map(user=>{
      if(user && user.sessionToken){
        localStorage.setItem('token', user.sessionToken)
        this.id=user.user.id;
        
        this.role=user.user.role;
        console.log(user);
      }
      return user
    }))
  }

  // Singup
  signup(user) {
    return this.http.post<any>(`${this.base}/user/signup`, user)
    .pipe(map(user=>{
      if(user && user.sessionToken){
        localStorage.setItem('token', user.sessionToken)
        this.id=user.user.id;
        this.role=user.user.role
      }
      return user;
      
  }))
}

  //Logout
  logout() {
    localStorage.removeItem('token');
    this.id = undefined;
    this.role = undefined;
    this.currentUserSubject.next(null);
  }
  
  // View single page
  findUser(id) {
    return this.http.get(`${this.base}/user/${id}`)
  }
  // Update
  updateUser(id, user) {
    return this.http.put(`${this.base}/user/edit/${id}`, user)
  }
  // Delete
  deleteUser(id) {
    return this.http.delete(`${this.base}/user/delete/${id}`)
  }
  // Delete (admin)
  adminDeleteUser(id) {
    return this.http.delete(`${this.base}/user/delete/${id}/admin`)
  }
}
