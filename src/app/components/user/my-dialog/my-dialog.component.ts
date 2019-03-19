import { Component, Input, OnInit } from '@angular/core';
import { NgModel, FormGroup, FormBuilder } from '@angular/forms';
import { PlaylistService } from '../../../services/playlist/playlist.service'


@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.css']
})
export class MyDialogComponent implements OnInit {
  @Input ()

  playlistForm: FormGroup

  constructor(private formBuilder: FormBuilder, private playlistService: PlaylistService) {
    this.createForm()
   }


   private createForm(){
     this.playlistForm = this.formBuilder.group({
       
       thumbnail: '',
       name: ''
    
     })
   }

   onSubmit(){
     console.log(this.playlistForm.value)
     this.playlistService.createPlaylist(this.playlistForm.value)
     .subscribe(data => {
       console.log(data)
     })
   }

  ngOnInit() {
  }

}
