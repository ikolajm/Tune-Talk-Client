import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  base = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  // Create
  createComment(playlistId, commentObj) {
    return this.http.post(`${this.base}/playlist/${playlistId}/comment/add`, commentObj)
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
