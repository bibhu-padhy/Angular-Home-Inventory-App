import { Component, OnInit, Input } from '@angular/core';
import { ItemsModal } from '../../modal/items.modal';
import { MatDialog } from '@angular/material/dialog';
import { UpdateItemComponent } from '../../dialog-modal/update-item/update-item.component';

import Swal from 'sweetalert2'
import { InventoryItemsService } from '../../services/inventory-items.service';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  @Input() Item: ItemsModal;
  constructor(
    private matDialog: MatDialog,
    private inventoryItemService: InventoryItemsService
  ) { }

  ngOnInit(): void {
  }

  edit(item) {
    this.matDialog.open(UpdateItemComponent, {
      data: item
    })
  }


  delete(item: ItemsModal) {
    Swal.fire({
      icon: 'question',
      title: 'Remove Item ?',
      showCancelButton: true,
      confirmButtonText: 'Remove'
    }).then(res => {
      if (res.isConfirmed) {
        this.inventoryItemService.deleteItem(item.ItemId)
      }
    })
  }

}
