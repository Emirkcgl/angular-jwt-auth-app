import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  users: any[] = [];

  constructor(private authService: AuthService) {
    this.loadUsers();
  }

  loadUsers() {
    this.authService.loadUsers().subscribe(res => {
      this.users = res.data;
    });
  }
}
