import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ItemsModal } from '../modal/items.modal';
import { InventoryItemsService } from '../services/inventory-items.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { AddItemsDialogComponent } from '../dialog-modal/add-items-dialog/add-items-dialog.component';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent {

  private UserId: string;
  inventoryItemsForm: FormGroup;
  loggedInUser: any;

  inventoryItemsArray: Observable<ItemsModal[]> = this.inventoryService.getInCompleteInventoryItems();


  constructor(
    private dialog: MatDialog,
    private inventoryService: InventoryItemsService,
    public authService: AuthService,
  ) { }

  UpdateItem(item) {
    this.inventoryService.updateItem(item.ItemId, { IsCompleted: !item.isCompleted });
  }

  openItemForm() {
    this.dialog.open(AddItemsDialogComponent);
  }

}
