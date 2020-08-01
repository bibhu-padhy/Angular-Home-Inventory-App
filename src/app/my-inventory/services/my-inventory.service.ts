import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MyInventoryService {

  constructor(
    private db: AngularFirestore
  ) { }


  getCompletedInventoryItems() {
    const items_collections_ref = this.db.collection('items_list')
  }

}
