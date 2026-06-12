import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
})
export class Profile {
  currentUser:any;
   constructor(private authService: AuthService){
    this.currentUser = this.authService.currentUser();
  }
}
