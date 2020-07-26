import { Injectable } from '@angular/core';
import { ItemsModal } from '../modal/items.modal';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InventoryItemsService {

  private readonly item_collection_ref = this.db.collection('items_list');

  constructor(
    private db: AngularFirestore
  ) { }

  getInventoryItems(): Observable<any[]> {
    return this.db.collection('items_list', ref => ref.orderBy('CreatedAt', 'desc'))
      .valueChanges({ idField: 'ItemId' })
  }

  getItem(ItemId: string): Observable<any> {
    return this.db.doc(`items_list/${ItemId}`).get()
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
    this.db.doc(`items_list/${ItemId}`)
      .set(Item, { merge: true })
  }
}
