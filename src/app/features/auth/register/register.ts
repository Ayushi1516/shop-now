import { Component, signal } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register.html',
})
export class Register {

   isLoading = signal(false);

   signupForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    isRetailer: new FormControl(false)
  });

  constructor(private router: Router, private authService: AuthService) {}

 register() {
  if (this.signupForm.valid) {
    this.isLoading.set(true); // Start loading
    const user = this.signupForm.value;
    const newUser = {
      name: user.name!,
      email: user.email!,
      role: user.isRetailer ? 'RETAILOR' : 'USER'
    };

    this.authService.register(newUser).subscribe({
      next: () => {
        this.isLoading.set(false);
        alert('Registration successful!');
        this.router.navigate(['/login']);
      },
      error: (err: any) => {
        this.isLoading.set(false);
        alert(err.message || 'Registration failed');
      }
    });
  }
}

}
