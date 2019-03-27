import { Component, Input, OnInit } from '@angular/core';
import { NgModel, FormGroup, FormBuilder } from '@angular/forms';
import { PlaylistService } from '../../../services/playlist/playlist.service';
import { UserService } from '../../../services/user/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.css']
})
export class MyDialogComponent implements OnInit {
  @Input ()

  playlistForm: FormGroup

  constructor(private formBuilder: FormBuilder, 
    private playlistService: PlaylistService,
    private router: Router,
    private userService: UserService) {
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
       window.location.reload()
      //  console.log(data)
      // this.router.navigate([`/user/${this.userService.id}`])
     })
   }

  ngOnInit() {
  }

}
