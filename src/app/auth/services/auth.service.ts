import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { UserService } from 'src/app/common/services/user/user.service'
import { first } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public auth: AngularFireAuth,
    private router: Router,
    private userService: UserService
  ) { }


  async login() {
    // get the google sign in pop up
    const data = await this.auth.signInWithPopup(new auth.GoogleAuthProvider())
    console.log(data);
    if (data.user) {
      const userInfo = {
        displayName: data.user.displayName,
        email: data.user.email,
        photoURL: data.user.photoURL,
        uid: data.user.uid
      }
      console.log(data.additionalUserInfo);
      localStorage.setItem('refresh_token', (await data.user.getIdToken(true)))
      await this.userService.checkUserExistOrNot(data.additionalUserInfo.isNewUser, userInfo);
      this.router.navigateByUrl('/home');
    }
  }

  isLoggedIn() {
    return this.auth.authState.pipe(first()).toPromise();
  }

  async logout() {
    await this.auth.signOut();
    this.router.navigateByUrl('/auth/login');
  }
}
