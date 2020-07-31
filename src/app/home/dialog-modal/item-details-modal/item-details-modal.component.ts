import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ItemsModal } from '../../modal/items.modal';
@Component({
  selector: 'app-item-details-modal',
  templateUrl: './item-details-modal.component.html',
  styleUrls: ['./item-details-modal.component.scss']
})
export class ItemDetailsModalComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: ItemsModal) { }

}
