import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from "./login/login.component";

@Component({
    selector: 'app-auth',
    standalone: true,
    templateUrl: './auth.component.html',
    styleUrl: './auth.component.scss',
    imports: [LoginComponent]
})
export class AuthComponent {

  constructor(private router: Router) {}

  navigateToSignUp() {
    this.router.navigate(['/signup']);
  }
}
