import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  baseUrl = 'http://localhost3000'
  _data={}


  constructor(private http: HttpClient, private route: ActivatedRoute, private US: UserService) { }

  getUser() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.US.findUser(id).subscribe(user => {
      this._data = user;
    })
  }

  ngOnInit() {
    this.getUser()
  }
}
