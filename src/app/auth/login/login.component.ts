import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) {
    this.isLoggedIn()
  }

  ngOnInit(): void {
  }
  async isLoggedIn() {
    console.log(await this.authService.isLoggedIn());
  }

}
