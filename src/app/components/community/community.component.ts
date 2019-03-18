import { Component, OnInit } from '@angular/core';

import { PlaylistService } from '../../services/playlist/playlist.service'

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {

  constructor(
    private playlistService: PlaylistService
  ) { }

  ngOnInit() {
    this.playlistService.getAllPlaylists()
      .subscribe(data => {console.log(data)});
      
  }

}
