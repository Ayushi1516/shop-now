import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-accounts',
  imports: [],
  templateUrl: './accounts.html',
})
export class Accounts {
  currentUser:any;
     constructor(private authService: AuthService){
      this.currentUser = this.authService.currentUser();
    }
}
