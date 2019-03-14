import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  baseUrl = 'http://localhost3000'
  _data={}
  userId = "1"

  constructor(private http: HttpClient) { }

  ngOnInit() {
    return (this.http.get(`${this.baseUrl}/user/${this.userId}`))
    .subscribe(data => {
      this._data = data
    })
  }

}
