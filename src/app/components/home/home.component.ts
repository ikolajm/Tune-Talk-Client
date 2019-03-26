import { Component, OnInit } from '@angular/core';

import { PlaylistService } from '../../services/playlist/playlist.service';
import { ɵangular_packages_platform_browser_platform_browser_h } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content:string;

  
  public _playlists;

  constructor(
    private playlistService: PlaylistService,

  ) { }

  getPlaylists() {
    this.playlistService.getAllPlaylists()
        .subscribe(data => {
          console.log(data)
          this._playlists = data
        });
    }

    

  ngOnInit() {
    this.getPlaylists()
  }

}
