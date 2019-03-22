import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})



export class CommentComponent implements OnInit {

  constructor
    (@Inject(MAT_DIALOG_DATA)
      public data: any) { }


      //call function for opening comments section
        openComments() {

        }



      //need button for submitting comments
        onSubmit() {

        }


      //need button for cancel comments and exit playlist view
        
  ngOnInit() {
  }

}
