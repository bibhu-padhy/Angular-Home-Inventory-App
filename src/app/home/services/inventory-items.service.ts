import { Injectable } from '@angular/core';
import { ItemsModal } from '../modal/items.modal';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, switchMap, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class InventoryItemsService {
  private readonly item_collection_ref = this.db.collection('items_list');
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
            return this.db.collection('items_list',
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
    const addedItem = await this.item_collection_ref.add(item);
    return addedItem.id;
  }

  updateItem(ItemId, Item: any) {
    if (ItemId && Item) {
      this.db.doc(`items_list/${ItemId}`)
        .set(Item, { merge: true })
        .then((_) => {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            onOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })

          Toast.fire({
            icon: 'success',
            title: 'Item Has been added to the Inventory'
          })
        })
    }

  }
}
