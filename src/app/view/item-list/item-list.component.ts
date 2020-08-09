import { Component, OnInit } from '@angular/core';
import { InventoryService, ItemsModal } from '../inventory/services/inventory.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  $items: Observable<ItemsModal> = this.inventoryService.getInCompleteInventoryItems()

  constructor(
    private inventoryService: InventoryService
  ) { }

  ngOnInit() {
    this.inventoryService.getInCompleteInventoryItems()
      .subscribe(i => {
        console.log(i);
      })
  }

}
