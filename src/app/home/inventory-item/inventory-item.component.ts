import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { ItemsModal } from '../modal/items.modal';

@Component({
  selector: 'app-inventory-item',
  templateUrl: './inventory-item.component.html',
  styleUrls: ['./inventory-item.component.scss']
})
export class InventoryItemComponent {

  @Input() InventtoryItem: ItemsModal
  @Output('selectedItemId') selectedItemId = new EventEmitter();

  constructor() { }

  getItemDetails(Item: ItemsModal, isShowDetails: boolean) {
    this.selectedItemId.emit({ ItemId: Item.ItemId, isShowDetails, isCompleted: Item.IsCompleted });
  }

}
