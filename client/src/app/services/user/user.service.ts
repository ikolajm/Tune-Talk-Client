import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  base = 'http://localhost:3000';
  public id: number;
  public role: string;

  constructor(private http: HttpClient) { }

  // Login
  login(user) {
    return this.http.post(`${this.base}/user/signin`, user)
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
      return user
  }))
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
