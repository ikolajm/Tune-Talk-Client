import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  base = 'http://localhost:3000/playlist';

  constructor(private http: HttpClient) { }

  // Get all 
  getAllPlaylists() {
    return this.http.get(`${this.base}`);
  }
  // Get single
  getPlaylist(id) {
    return this.http.get(`${this.base}/${id}`)
  }
  // Create
  createPlaylist(postObj) {
    return this.http.post(`${this.base}/create`, postObj)
  }
  // Edit
  editPlaylist(playlistId, playlistObj) {
    return this.http.put(`${this.base}/edit/${playlistId}`, playlistObj);
  }
  // Delete
  deletePlaylist(playlistId) {
    return this.http.delete(`${this.base}/delete/${playlistId}`)
  }
  // Delete (admin)
  adminDeletePlaylist(playlistId) {
    return this.http.delete(`${this.base}/delete/${playlistId}/admin`)
  }
}
