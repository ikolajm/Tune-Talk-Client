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
export class PlaylistService {
  base = 'http://localhost:3000/playlist';

  constructor(private http: HttpClient) { }

  // Get all 
  getAllPlaylists() {
    return this.http.get(`${this.base}`);
  }
  // Get single
  getPlaylist(id) {
    return this.http.get(`${this.base}/${id}`);
  }
  // Create
  createPlaylist(postObj) {
    return this.http.post<any>(`${this.base}/create`, postObj, httpOptions)
  }
  // Edit
  editPlaylist(playlistId, playlistObj) {
    return this.http.put(`${this.base}/edit/${playlistId}`, playlistObj, httpOptions);
  }
  // Delete
  deletePlaylist(playlistId) {
    return this.http.delete(`${this.base}/delete/${playlistId}`)
  }
  // Delete (admin)
  adminDeletePlaylist(playlistId) {
    return this.http.delete(`${this.base}/delete/${playlistId}/admin`)
  }

  // Playlist refresh
  playlistRefresh(playlist) {
    return this.http.get(`${this.base}/${playlist.results.id}`);
  }
}
