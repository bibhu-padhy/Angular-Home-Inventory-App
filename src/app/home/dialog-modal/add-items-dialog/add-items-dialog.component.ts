import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ItemsModal } from '../../modal/items.modal';
import { InventoryItemsService } from '../../services/inventory-items.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-items-dialog',
  templateUrl: './add-items-dialog.component.html',
  styleUrls: ['./add-items-dialog.component.scss']
})
export class AddItemsDialogComponent {

  inventoryItemsForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private inventoryService: InventoryItemsService,
    public authService: AuthService,
    private dialog: MatDialog
  ) {
    this.inventoryItemsForm = this.fb.group({
      ItemName: ['', [Validators.required]],
      ItemPrice: [''],
      ItemQuantity: ['', [Validators.required]],
      CreatedAt: new Date(),
      UpdatedAt: null,
      IsCompleted: false,
      UserId: ''
    });
  }


  async addItem(formValue: ItemsModal) {
    if (this.inventoryItemsForm.valid) {
      formValue.UserId = await this.authService.getUserId();
      this.inventoryService.addItem(formValue)
        .then((_) => {
          this.dialog.closeAll();
          this.inventoryItemsForm.reset();
        });
    } else {
      console.log('invalid');
    }
  }

}
