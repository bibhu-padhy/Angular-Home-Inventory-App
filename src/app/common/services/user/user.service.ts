import { Injectable } from '@angular/core';
import { UserModal } from 'src/app/common/data-modal/user.modal'
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private DB: AngularFirestore,
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

}


