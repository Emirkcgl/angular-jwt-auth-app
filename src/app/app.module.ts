import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';

/* PrimeNG Modülleri */
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomerInterceptor } from './services/customer.interceptor';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [AppComponent, LoginComponent, LayoutComponent, DashboardComponent],
  imports: [BrowserModule, AppRoutingModule, InputTextModule, PasswordModule, ButtonModule, FormsModule, ReactiveFormsModule, HttpClientModule, ToastModule, BrowserAnimationsModule, MenubarModule],
  providers: [
    MessageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomerInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
