import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, RouterLinkActive, RouterLink],
  templateUrl: './dashboard.html',
})
export class Dashboard {
  title = 'Shop Now';

  isSidebarOpen = signal(false);

  toggleSidebar() {
    this.isSidebarOpen.update(value => !value);
  }
  currentUser:any;
  constructor(private authService: AuthService){
    this.currentUser = this.authService.currentUser();
  }

}
