import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')

  })
}

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  base = 'http://localhost:3000'

  httpHeaders = new Headers({
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  })

  constructor(private http: HttpClient) { }

  // Create
  createComment(playlistId, commentObj) {
    return this.http.post(`${this.base}/playlist/${playlistId}/comment/add`, commentObj, httpOptions)
  }
  // Edit
  editComment(commentId, commentObj) {
    return this.http.put(`${this.base}/comment/edit/${commentId}`, commentObj)
  } 
  // Delete
  deleteComment(commentId) {
    return this.http.delete(`${this.base}/delete/${commentId}`);
  }
  // Delete (admin)
  adminDeleteComment(commentId) {
    return this.http.delete(`${this.base}/delete/${commentId}/admin`);
  }
}
