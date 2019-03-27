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
export class SongService {

  base = 'http://localhost:3000/playlist';
  songURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }
  
  // Create
  createSong(playlistObj, songObj) {
    return this.http.post(`${APIURL}/playlist/${playlistObj.id}/song/add`, songObj, httpOptions);
  }
  // Update
  updateSong(songId, songObj) {
    return this.http.put(`${APIURL}/song/edit/${songId}`, songObj, httpOptions);
  }
  // Delete
  deleteSong(id) {
    return this.http.delete(`${APIURL}/song/delete/${id}`, httpOptions)
  }
  // Delete (admin)
  adminDeleteSong(id) {
    return this.http.delete(`${APIURL}/song/delete/${id}/admin`)
  }
}
