import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogClose} from '@angular/material';
import { PlaylistService } from 'src/app/services/playlist/playlist.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  _data={}
  name: string;
  album: string;
  artist: string;
  thumbnail: string;
  _playlistData={};
  baseUrl = 'http://localhost3000';
  


  constructor(private http: HttpClient, 
    private route: ActivatedRoute,
    private router: Router, 
    private US: UserService, 
    public dialog: MatDialog, 
    private PLService: PlaylistService) { }

  getUser() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.US.findUser(id).subscribe(user => {
      this._data = user;
      console.log(user)
    })
  }

  test(): void {
    console.log('I am connected to the html')
    const dialogRef = this.dialog.open(MyDialogComponent, {
      width: '250px',
      data: {name: this.name, album: this.album, artist: this.artist, thumbnail: this.thumbnail}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log();
      this.name = result;
    });

  }

  commPageNav() {
    // this.PLService.getAllPlaylists();
    this.router.navigate(['/community']);
  }


  ngOnInit() {
    this.getUser()
  }
}
