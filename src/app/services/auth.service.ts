import { Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  private apiUrl = 'http://localhost:3000/users';

  // Store the current user in a signal for global access
   currentUser = signal<User | null>(null);
  isAuthenticated = computed(() => !!this.currentUser());

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  register(userData: any): Observable<any> {
    // Check if email already exists before posting
    return this.http.get<any[]>(`${this.apiUrl}?email=${userData.email}`).pipe(
      switchMap((users) => {
        if (users.length > 0) {
          return throwError(() => new Error('Email already registered!'));
        }
        return this.http.post(this.apiUrl, userData);
      }),
    );
  }

  getUsers() {
    return this.http.get(this.apiUrl);
  }

  login(loginUser: any) {
    const currentUser = loginUser.value;
    this.getUsers().subscribe({
      next: (res: any) => {
        const users = res;
        this.navigateUser(users, currentUser);
      },
      error: (error) => {
        new Error(error);
      },
    });
  }

  navigateUser(users: User[], currentUser: any) {
    const foundUser = users.find(
      (user: any) => user.email === currentUser.email && user.password === currentUser.password,
    );
    if (foundUser) {
      this.currentUser.set(foundUser); // Update the signal state
      // Your requested navigation logic
      if (foundUser.role === 'USER') this.router.navigate(['/user/dashboard']);
      if (foundUser.role === 'RETAILOR') this.router.navigate(['/retailor/dashboard']);
      if (foundUser.role === 'ADMIN') this.router.navigate(['/admin/dashboard']);
      alert('Login successful!');
    } else {
      alert('Invalid email or password.');
    }
  }
}
