import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  base = 'http://localhost:3000/playlist';

  constructor(private http: HttpClient) { }
  
  // Create
  createSong(playlistId, songObj) {
    return this.http.post(`${this.base}/${playlistId}/song/add`, songObj);
  }
  // Update
  updateSong(songId, songObj) {
    return this.http.put(`${this.base}/song/edit/${songId}`, songObj);
  }
  // Delete
  deleteSong(id) {
    return this.http.delete(`${this.base}/song/delete/${id}`)
  }
  // Delete (admin)
  adminDeleteSong(id) {
    return this.http.delete(`${this.base}/song/delete/${id}/admin`)
  }
}
