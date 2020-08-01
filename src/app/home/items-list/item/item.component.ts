import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { ItemsModal } from '../../modal/items.modal';
import { MatDialog } from '@angular/material/dialog';
import { ItemDetailsModalComponent } from '../../dialog-modal/item-details-modal/item-details-modal.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {

  @Input() InventtoryItem: ItemsModal;
  @Output('UpdateItem') UpdateItem = new EventEmitter();

  constructor(
    private dialog: MatDialog
  ) { }


  showDeatils(item: ItemsModal) {
    this.dialog.open(ItemDetailsModalComponent, {
      data: item
    });
  }

  makeItemCompleted(Item: ItemsModal) {
    this.UpdateItem.emit({ ItemId: Item.ItemId, isCompleted: Item.IsCompleted });
  }

}
