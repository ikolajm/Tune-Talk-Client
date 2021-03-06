import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';

import { PlaylistService } from '../../services/playlist/playlist.service'
import { CommentService } from 'src/app/services/comment/comment.service';
import { CommentComponent } from './comment/comment.component';
import { UserService } from '../../services/user/user.service';


@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {
  content: string;
  

  _playlists;
  active;

  constructor(
    // private http: HttpClient,
    // private route: ActivatedRoute,
    private userService: UserService,
    public dialog: MatDialog,
    private playlistService: PlaylistService,
    private commentService: CommentService,
  ) { }


  getPlaylists() {
  this.playlistService.getAllPlaylists()
      .subscribe(data => {
        this._playlists = data
      });
  }



//dialog to view playlist and make comments
  openPlaylist(id) {
    this.playlistService.getPlaylist(id).subscribe(data => {
      this.active = data
      const dialogPlaylist = this.dialog.open(CommentComponent, {
        width: '600px', height: '800px',
        data: {playlist: this.active},
        panelClass: 'app-full-bleed-dialog'
      })
  
      dialogPlaylist.afterClosed().subscribe(result => {
        console.log();
        this.content = result;
        
      })
    })
  }

  //link "favorite" click

  


  ngOnInit() {
    this.getPlaylists();
     
  }

}
