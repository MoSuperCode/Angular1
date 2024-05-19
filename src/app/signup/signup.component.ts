import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
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

    console.log('Registrierung abgesendet', this.userdata);
    // Hier könntest du eine HTTP-Anfrage senden, um die Daten an den Server zu schicken
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  toggleShowConfirmPassword() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
}
