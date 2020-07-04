import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';
import { UserService } from '../common/services/user/user.service';
import { Observable } from 'rxjs';
import { UserModal } from '../common/data-modal/user.modal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userData$: Observable<UserModal>

  constructor(
    public authService: AuthService,
    public userService: UserService
  ) { }

  ngOnInit(): void {
    this.userData$ = this.userService.userData$;
    this.userService.checkAccessToken();
  }

}
