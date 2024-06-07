import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  signup(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/users`, user);
  }

  login(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/sessions`, user);
  }

  logout(token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete(`${this.apiUrl}/sessions`, { headers });
  }

  sendHighscore(highscore: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/highscores`, highscore);
  }

  getHighscores(): Observable<any> {
    return this.http.get(`${this.apiUrl}/highscores`);
  }
}
