import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  showPassword: boolean = false;

  onSubmit(form: NgForm) {
    if (!form.valid) {
      alert('Bitte füllen Sie alle Pflichtfelder aus.');
      return;
    }

    if (this.password !== this.confirmPassword) {
      alert('Passwörter stimmen nicht überein.');
      return;
    }

    if (this.email === 'test@test.at' && this.password === '12345678') {
      console.log('Login successful.');
    } else {
      console.log('Login failed.');
    }
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
}
