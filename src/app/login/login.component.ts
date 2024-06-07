import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../auth.service';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  showPassword: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(form: NgForm) {
    if (!form.valid) {
      alert('Bitte füllen Sie alle Pflichtfelder aus.');
      return;
    }

    this.authService
      .login({ email: this.email, password: this.password })
      .subscribe(
        (response) => {
          console.log(response);
          localStorage.setItem('token', response.token);
          alert('Login erfolgreich');
          this.router.navigate(['/landing']);
        },
        (error) => {
          console.error(error);
          alert('Login fehlgeschlagen: ' + error.error.message);
        }
      );
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
}
