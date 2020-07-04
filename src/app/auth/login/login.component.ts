import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'
import { UserService } from 'src/app/common/services/user/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }

}
