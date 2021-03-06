import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {APIURL} from '../../../environments/environment.prod';

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

  base = `${APIURL}`

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
    return this.http.put(`${this.base}/comment/edit/${commentId}`, commentObj, httpOptions)
  } 
  // Delete
  deleteComment(commentId) {
    return this.http.delete(`${this.base}/comment/delete/${commentId}`, httpOptions);
  }
  // Delete (admin)
  adminDeleteComment(commentId) {
    return this.http.delete(`${this.base}/comment/delete/${commentId}/admin`, httpOptions);
  }
}
