import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../auth.service';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  userdata = {
    email: '',
    password: '',
    passwordConfirm: '',
    company: 'FH Technikum Wien',
    address: '',
    postalCode: '',
  };
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(form: NgForm) {
    if (!form.valid) {
      alert('Bitte füllen Sie alle Pflichtfelder aus.');
      return;
    }

    if (this.userdata.password.length < 8) {
      alert('Das Passwort muss mindestens 8 Zeichen lang sein.');
      return;
    }

    if (this.userdata.password !== this.userdata.passwordConfirm) {
      alert('Passwörter stimmen nicht überein.');
      return;
    }

    this.authService.signup(this.userdata).subscribe(
      (response) => {
        console.log(response);
        alert('Registrierung erfolgreich');
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error(error);
        alert('Registrierung fehlgeschlagen: ' + error.error.message);
      }
    );
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  toggleShowConfirmPassword() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
}
