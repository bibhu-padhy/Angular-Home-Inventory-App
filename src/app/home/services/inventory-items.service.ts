import { Injectable } from '@angular/core';
import { ItemsModal } from '../modal/items.modal';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, switchMap, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import Swal from 'sweetalert2'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InventoryItemsService {
  private readonly collectionName = environment.production ? 'items_list' : 'items_list_dev';
  loggedInUser: firebase.User;

  constructor(
    private db: AngularFirestore,
    private authService: AuthService
  ) { }

  getInCompleteInventoryItems(): Observable<any> {
    const items = this.authService.auth.authState
      .pipe(
        switchMap((user: firebase.User) => {
          if (user) {
            return this.db.collection(this.collectionName,
              collection_ref =>
                collection_ref
                  .orderBy('CreatedAt', 'desc')
                  .where('UserId', '==', user?.uid)
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
    const items = this.authService.auth.authState
      .pipe(
        switchMap((user: firebase.User) => {
          if (user) {
            return this.db.collection(this.collectionName,
              collection_ref =>
                collection_ref
                  .orderBy('CreatedAt', 'desc')
                  .where('UserId', '==', user?.uid)
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

  getItem(ItemId: string): Observable<any> {
    return this.db.doc(`items_list/${ItemId}`)
      .get()
      .pipe(
        map(i => {
          if (!i.exists) {
            console.log('no data')
          } else {
            return { ItemId: i.id, ...i.data() }
          }
        })
      )
  }

  async addItem(item: ItemsModal) {
    const addedItem = await this.db.collection(this.collectionName).add(item);
    return addedItem.id;
  }

  updateItem(ItemId, Item: any) {
    if (ItemId && Item) {
      this.db.doc(`${this.collectionName}/${ItemId}`)
        .set(Item, { merge: true })
        .then((_) => {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 2000,
          })
          Toast.fire({
            icon: 'success',
            title: 'Item Has been added to the Inventory'
          })
        })
    }
  }

  deleteItem(ItemId: string) {
    this.db.doc(`${this.collectionName}/${ItemId}`)
      .delete()
      .then((_) => {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 2000,
        })
        Toast.fire({
          icon: 'success',
          title: 'Item Has been removed successfully'
        })
      })
  }
}
