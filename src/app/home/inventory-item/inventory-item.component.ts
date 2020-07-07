import { Component, Input } from '@angular/core';
import { ItemsModal } from '../modal/items.modal';

@Component({
  selector: 'app-inventory-item',
  templateUrl: './inventory-item.component.html',
  styleUrls: ['./inventory-item.component.scss']
})
export class InventoryItemComponent {

  @Input() InventtoryItem: ItemsModal

  constructor() { }

}
