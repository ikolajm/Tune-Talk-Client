import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models/user';
import { HttpXsrfCookieExtractor } from '@angular/common/http/src/xsrf';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }
    
    signup(user: User) {
        return this.http.post(`https://localhost:3000/user/signup`, user);
    }

    signin() {
        return this.http.get<User[]>(`https://localhost:3000/user/signin`);
    }

    getById(id: number) {
        return this.http.get(`https://localhost:3000/user/${id}`);
    }

    update(user: User) {
        return this.http.put(`https://localhost:3000/user/edit/${user.id}`, user);
    }

    delete(id: number) {
        return this.http.delete(`https://localhost:3000/user/delete/${id}`);
    }
}
