import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { UserService } from '../services/user/user.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private UserService: UserService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const Id = this.UserService.id;
        if (Id !== undefined) {
            // authorised so return true
            return true;
        }
        
        // not logged in so redirect to login page with the return url
        // this.router.navigate(['/home'], { queryParams: { returnUrl: state.url }});
        this.router.navigate ['/home'];
        return false;
    }
}