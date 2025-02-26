import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  items: any[] = [];

  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.items = [
      { label: 'Ana Sayfa', command: () => {} },
      { label: 'Hakkımızda', command: () => {} },
      { label: 'İletişim', command: () => {} },
    ];
  }
  logout() {
    this.authService.logout();
  }
}
