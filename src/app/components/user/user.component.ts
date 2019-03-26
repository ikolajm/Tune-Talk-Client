import { Component, OnInit, Inject, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogClose} from '@angular/material';
import { PlaylistService } from 'src/app/services/playlist/playlist.service';
import { SongDialogComponent } from './song-dialog/song-dialog.component';
import { NgModel, FormGroup, FormBuilder } from '@angular/forms';
import { SongService } from '../../services/song/song.service'




@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()

  _data={}
  name= ''
  album = ''
  artist = ''
  thumbnail = ''
  _playlistData={};
  baseUrl = 'http://localhost:4200';
  addSong = false
  addPlaylist = false
  editSong = false
  editForm: FormGroup
  classShow = false
  active = {}


  constructor(private http: HttpClient, 
    private route: ActivatedRoute, 
    private US: UserService, 
    public dialog: MatDialog, 
    private PLService: PlaylistService, 
    private formBuilder: FormBuilder, 
    private sService: SongService, 
    private router: Router) 
    {
    this.createForm()
   }


   private createForm(){
     this.editForm = this.formBuilder.group({
      name: '',
      album:'',
      artist:'',
      thumbnail:''
     })
   }



   //edit song in playlist
   onEdit(songId){
     console.log(this.editForm.value)
     console.log(songId)
    this.sService.updateSong(songId, this.editForm.value).subscribe(results =>
      console.log(results)
    )
   }

  //get playlists owned by user
  getUser() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.US.findUser(id).subscribe(user => {
      this._data = user;
    })
  }

  delete(songId){
    this.sService.deleteSong(songId).subscribe(results =>
      window.location.href = `${this.baseUrl}/user/${localStorage.userId}`
    )
  }


  // test(): void {
  //   console.log('I am connected to the html')
  //   const dialogRef = this.dialog.open(MyDialogComponent, {
  //     width: '250px',
  //     data: {name: this.name, thumbnail: this.thumbnail}
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     this.name = result;
  //   });

  // }

  // openSong(): void {
  //   const dialogRef = this.dialog.open(SongDialogComponent, {
  //     width: '250px',
  //     data: {name: this.name, album: this.album, artist: this.artist, thumbnail: this.thumbnail}
  //   });

  //   dialogRef.afterClosed().subscribe(songResult =>{
  //     this.name = songResult;
  //   })
  // }


  //get single playlist by id
  getPlaylist(id) {
    this.PLService.getPlaylist(id).subscribe(results => {
      console.log(results)
      this._playlistData = results
    })
  }
  //conditional for add song to display
  songToggle(){
    let data = this.addSong;
    this.addSong = !data
  }
  //conditional for adding a playlist to display
  playlistToggle(){
    let data = this.addPlaylist;
    this.addPlaylist = !data
  }
  //conditional for edit to display
  editToggle(){
    let data = this.editSong;
    this.editSong = !data
  }

  commPageNav() {
    // this.PLService.getAllPlaylists();
    this.router.navigate(['/community']);
  }



  ngOnInit() {
    this.getUser()
    // this.editSong = true;
  }
}
