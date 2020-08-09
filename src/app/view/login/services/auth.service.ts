import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { auth } from 'firebase/app';
import { first } from 'rxjs/operators';

export interface UserModal {
  displayName: string;
  email: string;
  photoURL: string;
  uid?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public af_auth: AngularFireAuth,
    private router: Router,
    private DB: AngularFirestore,
  ) { }

  async login() {

    const data = await this.af_auth.auth.signInWithPopup(new auth.GoogleAuthProvider());

    if (data.user) {
      const userInfo = {
        displayName: data.user.displayName,
        email: data.user.email,
        photoURL: data.user.photoURL,
        uid: data.user.uid
      }
      if (data.additionalUserInfo.isNewUser) {
        await this.storeUserData(userInfo);
      }
      this.router.navigateByUrl('/items-list');
    }
  }

  async logout() {
    await this.af_auth.auth.signOut();
    this.router.navigateByUrl('/auth/login');
  }

  private async storeUserData(data: UserModal) {
    await this.DB.collection('users_list')
      .add(data);
  }

  private isLoggedIn() {
    return this.af_auth.authState.pipe(first()).toPromise();
  }

  async getUserId(): Promise<string> {
    const user = await this.isLoggedIn()
    return user.uid
  }

}
