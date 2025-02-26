import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  API_URL = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<any> {
    const body = { emailId: email, Password: password };
    console.log(`${this.API_URL}/login`);

    return this.http.post<any>(`${this.API_URL}/login`, body).pipe(
      tap(res => {
        if (res && res.data.token) {
          localStorage.setItem('loginToken', res.data.token);
        }
      })
    );
  }

  loadUsers() {
    return this.http.get<any>(`${this.API_URL}/GetAllUsers`);
  }

  isAuthenticatedUser(): boolean {
    return !!localStorage.getItem('loginToken');
  }

  logout() {
    localStorage.removeItem('loginToken');
    this.router.navigateByUrl('/login');
  }
}
