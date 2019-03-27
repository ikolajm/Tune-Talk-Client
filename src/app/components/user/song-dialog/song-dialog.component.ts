import { Component, Input, OnInit } from '@angular/core';
import { NgModel, FormGroup, FormBuilder } from '@angular/forms';
// import { PlaylistService } from '../../../services/playlist/playlist.service'
import { UserComponent } from '../user.component';
import { SongService } from 'src/app/services/song/song.service';
import { PlaylistService } from 'src/app/services/playlist/playlist.service'
import { PlaylistData } from '../../../_models/playlistData'

@Component({
  selector: 'app-song-dialog',
  templateUrl: './song-dialog.component.html',
  styleUrls: ['./song-dialog.component.css']
})
export class SongDialogComponent implements OnInit {
  
  songForm: FormGroup;
  playlistData: PlaylistData


  
  constructor(private formBuilder: FormBuilder, 
    private songService: SongService, 
    private playlistService: PlaylistService ) {
    this.createForm()
  }

  @Input() set playlist(playlist) {
    this.playlistData = playlist
  }

  get playlist() {
    console.log(this.playlistData)
    return this.playlistData
  }
  
   private createForm(){
    this.songForm = this.formBuilder.group({
      name: '',
      album:'',
      artist:'',
      thumbnail:''
    })
   }


   onClick(){ 
    //  let playlistData = new PlaylistData(response['response'])
    console.log(this.songForm.value)
    console.log('playlist data',this.playlistData)
    this.songService.createSong(this.playlistData, this.songForm.value).subscribe(results =>
      console.log(results))
   
   }

  ngOnInit() {
    console.log(this.playlistData)
  }

} 
