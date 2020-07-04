import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserModal } from 'src/app/common/data-modal/user.modal'
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators'
import { AngularFireAuth } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userData = new BehaviorSubject(null);
  userData$ = this.userData.asObservable();

  constructor(
    private DB: AngularFirestore,
    private auth: AngularFireAuth
  ) { }

  getUserData(data: UserModal) {
    return this.userData.next(data);
  }

  checkAccessToken() {
    this.auth.user.subscribe((res) => {
      console.log(res.refreshToken);
    })
  }

  async checkUserExistOrNot(uid: string, newUser: UserModal) {
    const usersList = await this.getUserList().toPromise()
    const user = usersList.find(u => u.uid === uid)
    if (!usersList || !user) {
      console.log(newUser);
      await this.storeUserData(newUser);
    }
  }

  async storeUserData(data: UserModal) {
    await this.DB.collection('users_list')
      .add(data);
  }

  getUserList() {
    return this.DB.collection('users_list')
      .get()
      .pipe(
        map(d => d.docs.map(data => data.data()))
      )
  }

}


