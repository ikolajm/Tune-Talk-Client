import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { CommentService } from 'src/app/services/comment/comment.service';
import { FormGroup, FormBuilder, Form} from '@angular/forms';




@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})



export class CommentComponent implements OnInit {

  commentForm: FormGroup
  editContent = ''
  userId = Number(localStorage.getItem('userId'))
  isAdmin = false;
  commentEdit = false;

  

  constructor
    (@Inject(MAT_DIALOG_DATA)
      public data: any,
      private commentService: CommentService,
      private formBuilder: FormBuilder
      ) { 
        this.createForm()
      }

        private createForm(){
          this.commentForm = this.formBuilder.group({
            content: ''
          })
        }


      //need button for submitting comments
        onSubmit(playlistId) {
          console.log(this.data)
          console.log(playlistId)
          console.log(this.commentForm.value)
          this.commentService.createComment(playlistId, this.commentForm.value).subscribe(data => {
            console.log('I worked!')
            
          });window.location.href
        }
        
        

        edit(id) {
          let content = {
            content: this.editContent
          }
          this.commentService.editComment(id, content).subscribe(data => {
            console.log(content)
          })
        }

        trigger(){
          this.commentEdit = true
        }
      

        delete(id) {
          this.commentService.deleteComment(id)
          .subscribe(data => {
            console.log('comment deleted')
          })
        }

        deleteAdmin(id) {
          this.commentService.adminDeleteComment(id).subscribe(data => {
            console.log('Comment deleted')
          })
        }


      //need button for cancel comments and exit playlist view
        
  ngOnInit() {
    console.log(this.userId);
    if (localStorage.getItem('role') === 'admin'){
      this.isAdmin = true;
      this.commentEdit = true;
    }
  }

}
