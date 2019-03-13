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
  userId = 'this._data.id'

  constructor(private http: HttpClient) { }

  ngOnInit() {
    return (this.http.get(`${this.baseUrl}/playlist/${this.userId}`))
    .subscribe(data => {
      this._data = data
    })
  }

}
