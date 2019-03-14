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
    this.http.get(`${this.base}`);
  }
  // Get single
  getPlaylist(id) {
    this.http.get(`${this.base}/${id}`)
  }
  // Create
  createPlaylist(postObj) {
    this.http.post(`${this.base}/create`, postObj)
  }
  // Edit
  editPlaylist(playlistId, playlistObj) {
    this.http.put(`${this.base}/edit/${playlistId}`, playlistObj);
  }
  // Delete
  deletePlaylist(playlistId) {
    this.http.delete(`${this.base}/delete/${playlistId}`)
  }
  // Delete (admin)
  adminDeletePlaylist(playlistId) {
    this.http.delete(`${this.base}/delete/${playlistId}/admin`)
  }
}
