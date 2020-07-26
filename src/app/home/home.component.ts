import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ItemsModal } from './modal/items.modal'
import { InventoryItemsService } from './services/inventory-items.service'
import { AuthService } from '../auth/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  private UserId: string;
  inventoryItemsForm: FormGroup;
  loggedInUser: any;
  inventoryItemsArray: Observable<ItemsModal[]> = this.inventoryService.getInventoryItems()


  constructor(
    private fb: FormBuilder,
    private inventoryService: InventoryItemsService,
    public authService: AuthService

  ) {
    this.inventoryItemsForm = this.fb.group({
      ItemName: ['', [Validators.required]],
      ItemPrice: ['', [Validators.required]],
      ItemQuantity: ['', [Validators.required]],
      CreatedAt: new Date(),
      UpdatedAt: null,
      IsCompleted: false,
      UserId: ''
    })
  }

  get FC() {
    return this.inventoryItemsForm.controls
  }

  getSelectedItemId(item: { ItemId: string, isShowDetails: string, isCompleted: boolean }) {
    if (item.isShowDetails) { // show details
      this.inventoryService.getItem(item.ItemId)
        .subscribe((res) => {
          console.log(res);
        })
    } else { // update
      this.inventoryService.updateItem(item.ItemId, { IsCompleted: !item.isCompleted })
    }
  }

  async addItem(formValue: ItemsModal) {
    if (this.inventoryItemsForm.valid) {
      formValue.UserId = await this.authService.getUserId();
      this.inventoryService.addItem(formValue)
        .then((_) => {
          this.inventoryItemsForm.reset()
        })
    } else {
      console.log('invalid')
    }
  }

}
