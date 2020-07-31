import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ItemsModal } from './modal/items.modal'
import { InventoryItemsService } from './services/inventory-items.service'
import { AuthService } from '../auth/services/auth.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ItemDetailsModalComponent } from './dialog-modal/item-details-modal/item-details-modal.component';
import { AddItemsDialogComponent } from './dialog-modal/add-items-dialog/add-items-dialog.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent {
  private UserId: string;
  inventoryItemsForm: FormGroup;
  loggedInUser: any;

  inventoryItemsArray: Observable<ItemsModal[]> = this.inventoryService.getInventoryItems();


  constructor(

    private inventoryService: InventoryItemsService,
    public authService: AuthService,
    private dialog: MatDialog

  ) {

  }

  get FC() {
    return this.inventoryItemsForm.controls;
  }

  getSelectedItemId(item: { ItemId: string, isShowDetails: string, isCompleted: boolean }) {
    if (item.isShowDetails) { // show details
      this.inventoryService.getItem(item.ItemId)
        .subscribe((res) => {
          console.log(res);
        });
    } else { // update
      this.inventoryService.updateItem(item.ItemId, { IsCompleted: !item.isCompleted });
    }
  }

  showDeatils(item: ItemsModal) {
    this.dialog.open(ItemDetailsModalComponent, {
      data: item
    });
  }

  openItemForm() {
    this.dialog.open(AddItemsDialogComponent);
  }



}
