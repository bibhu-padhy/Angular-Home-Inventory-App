import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public auth: AngularFireAuth,
    private router: Router
  ) {
  }

  async login() {
    // get the google sign in pop up
    await this.auth.signInWithPopup(new auth.GoogleAuthProvider())
    // if it completes redirect to home
    this.router.navigateByUrl('/home');
  }

  async logout() {
    await this.auth.signOut();
    this.router.navigateByUrl('/auth/login');
  }
}
