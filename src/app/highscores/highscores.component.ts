import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-highscores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './highscores.component.html',
  styleUrls: ['./highscores.component.css'],
})
export class HighscoresComponent implements OnInit {
  highscores: any[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getHighscores().subscribe(
      (data) => {
        this.highscores = data;
      },
      (error) => {
        console.error(error);
        alert('Fehler beim Abrufen der Highscores: ' + error.error.message);
      }
    );
  }
}
