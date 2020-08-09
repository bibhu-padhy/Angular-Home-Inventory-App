import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../../login/services/auth.service';

import { switchMap, tap } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarService } from 'src/app/common/services/snack-bar.service';

export interface ItemsModal {
  ItemId?: string;
  UserId: string;
  ItemName: string;
  ItemPrice: number;
  ItemQuantity: number;
  CreatedAt: Date;
  UpdatedAt: Date;
  IsCompleted: boolean;
  ItemRefrenceLink: string;
}

@Injectable({
  providedIn: 'root'
})

export class InventoryService {

  private readonly collectionName = environment.production ? 'items_list' : 'items_list_dev';
  loggedInUser: firebase.User;

  constructor(
    private db: AngularFirestore,
    private authService: AuthService,
    private _snackBar: SnackBarService
  ) { }

  getInCompleteInventoryItems(): Observable<any> {
    const items = this.authService.af_auth.authState
      .pipe(
        switchMap((user: firebase.User) => {
          if (user) {
            return this.db.collection(this.collectionName,
              collection_ref =>
                collection_ref
                  .orderBy('CreatedAt', 'desc')
                  .where('UserId', '==', user.uid)
                  .where('IsCompleted', '==', false)
            ).valueChanges({ idField: 'ItemId' })
              .pipe(
                tap(d => console.log(d))
              )
          } else {
            return null;
          }
        })
      )
    return items;
  }


  getCompletedInventoryItems(): Observable<any> {
    const items = this.authService.af_auth.authState
      .pipe(
        switchMap((user: firebase.User) => {
          if (user) {
            return this.db.collection(this.collectionName,
              collection_ref =>
                collection_ref
                  .orderBy('CreatedAt', 'desc')
                  .where('UserId', '==', user.uid)
                  .where('IsCompleted', '==', true)
            ).valueChanges({ idField: 'ItemId' })
              .pipe(
                tap(d => console.log(d))
              )
          } else {
            return null;
          }
        })
      )
    return items;
  }

  async addItem(item: ItemsModal) {
    const addedItem = await this.db.collection(this.collectionName).add(item);
    return addedItem.id;
  }

  updateItem(ItemId, Item: any) {
    if (ItemId && Item) {
      console.log(ItemId, Item);
      this.db.doc(`${this.collectionName}/${ItemId}`)
        .set(Item, { merge: true })
        .then((_) => {
          this._snackBar.openSnackBar('Item has been added to the inventory', '👍')
        })
    }
  }

  deleteItem(ItemId: string) {
    this.db.doc(`${this.collectionName}/${ItemId}`)
      .delete()
      .then((_) => {
        this._snackBar.openSnackBar('Item has been deleted successfully', '👍')
      })
  }
}
