import { Component, OnInit, Input } from '@angular/core';
import { ItemsModal, InventoryService } from '../../inventory/services/inventory.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {

  @Input() Item: ItemsModal;

  constructor(
    private inventoryService: InventoryService
  ) { }

  makeItemCompleted(Item: ItemsModal) {
    console.log(Item);
    this.inventoryService.updateItem(Item.ItemId, { IsCompleted: true });
  }

}
