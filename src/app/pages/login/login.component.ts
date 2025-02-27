import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router, private messageService: MessageService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}

  login() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next: (res: any) => {
        if (res && res.data?.token) {
          this.messageService.add({ severity: 'success', summary: 'Başarılı', detail: 'Giriş başarılı!' });

          this.router.navigateByUrl('/dashboard');
        } else {
          this.messageService.add({ severity: 'error', summary: 'Hata', detail: 'e-posta veya şifre hatalı!' });
        }
      },
      error: err => {
        const errorMessage = err?.error?.message || 'e-posta veya şifre hatalı!';

        if (err.status === 401) {
          this.messageService.add({ severity: 'error', summary: 'Hata', detail: 'e-posta veya şifre hatalı!' });
        } else {
          this.messageService.add({ severity: 'error', summary: 'Hata', detail: errorMessage });
        }
      },
    });
  }
}
