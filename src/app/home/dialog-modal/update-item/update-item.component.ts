import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InventoryItemsService } from '../../services/inventory-items.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ItemsModal } from '../../modal/items.modal';


@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.scss']
})
export class UpdateItemComponent {

  inventoryItemsForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private inventoryService: InventoryItemsService,
    public authService: AuthService,
    @Inject(MAT_DIALOG_DATA) public FormData: ItemsModal
  ) {
    this.inventoryItemsForm = this.fb.group({
      ItemName: [this.FormData.ItemName, [Validators.required]],
      ItemPrice: [this.FormData.ItemPrice],
      ItemQuantity: [this.FormData.ItemQuantity, [Validators.required]],
      CreatedAt: [this.FormData.CreatedAt],
      UpdatedAt: new Date(),
      IsCompleted: true,
      UserId: [this.FormData.UserId]
    });
    console.log(this.FormData)
  }

  async updateItem(formValue) {
    console.log(formValue)
    if (this.inventoryItemsForm.valid) {
      this.inventoryService.updateItem(this.FormData.ItemId, formValue)
    }
  }


}
