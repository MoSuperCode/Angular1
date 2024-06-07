import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent {
  constructor(private authService: AuthService, private router: Router) {}

  sendHighscore(score: number) {
    const token = localStorage.getItem('token');
    if (token) {
      this.authService.sendHighscore({ token, score }).subscribe(
        (response) => {
          console.log(response);
          alert('Highscore gesendet');
        },
        (error) => {
          console.error(error);
          alert('Fehler beim Senden des Highscores: ' + error.error.message);
        }
      );
    }
  }

  viewHighscores() {
    this.router.navigate(['/highscores']);
  }

  logout() {
    const token = localStorage.getItem('token');
    if (token) {
      this.authService.logout(token).subscribe(
        (response) => {
          console.log(response);
          localStorage.removeItem('token');
          alert('Logout erfolgreich');
          this.router.navigate(['/login']);
        },
        (error) => {
          console.error(error);
          alert('Fehler beim Logout: ' + error.error.message);
        }
      );
    }
  }
}
