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



  constructor(
    private DB: AngularFirestore,
    private auth: AngularFireAuth
  ) { }

  async checkUserExistOrNot(isNewUser: boolean, newUser: UserModal) {
    if (isNewUser) {
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
      ).toPromise()
  }

}


