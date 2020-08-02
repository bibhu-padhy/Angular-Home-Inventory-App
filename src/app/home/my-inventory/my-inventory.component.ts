import { Component, OnInit } from '@angular/core';
import { InventoryItemsService } from '../services/inventory-items.service';
import { Observable } from 'rxjs';
import { ItemsModal } from '../modal/items.modal';

@Component({
  selector: 'app-my-inventory',
  templateUrl: './my-inventory.component.html',
  styleUrls: ['./my-inventory.component.scss']
})
export class MyInventoryComponent {

  items$: Observable<ItemsModal[]> = this.inventoryService.getCompletedInventoryItems()
  constructor(
    private inventoryService: InventoryItemsService
  ) { }

}
