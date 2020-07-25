import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
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
  inventoryItemsArray: Observable<ItemsModal[]> = this.inventoryService.getInventoryItems();

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

  async getUserId(): Promise<string> {
    const user = await this.authService.isLoggedIn()
    return user.uid
  }

  get FC() {
    return this.inventoryItemsForm.controls
  }

  getSelectedItemId(id: { ItemtId: string }) {
    console.log(id);
    this.inventoryService.getItem(id.ItemtId)
      .subscribe((res) => {
        console.log(res);
      })
  }

  async addItem(formValue: ItemsModal) {
    if (this.inventoryItemsForm.valid) {
      formValue.UserId = await this.getUserId();
      this.inventoryService.addItem(formValue);
      console.log(formValue);
    } else {
      console.log('invalid')
    }
  }

  // drop(event: CdkDragDrop<string[]>) {
  //   moveItemInArray(this.inventoryItemsArray, event.previousIndex, event.currentIndex);
  // }

}
