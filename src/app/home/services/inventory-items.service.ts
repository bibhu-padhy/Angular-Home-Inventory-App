import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ItemsModal } from '../modal/items.modal';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InventoryItemsService {

  constructor(
    private db: AngularFirestore
  ) { }

  getInventoryItems(): Observable<ItemsModal[]> {
    return this.db.collection('items_list').get().pipe(
      map(i => i.docs.map(d => ({
        ItemId: d.id,
        ...d.data()
      }) as ItemsModal))
    )
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
}
