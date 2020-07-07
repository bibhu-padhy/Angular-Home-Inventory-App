import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ItemsModal } from './modal/items.modal'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  inventoryItemsForm: FormGroup;
  inventoryItemsArray: ItemsModal[] = [
    {
      ItemId: '1',
      ItemName: 'test test',
      ItemPrice: 40,
      ItemQuantity: 1,
      IsCompleted: false
    },
    {
      ItemId: '2',
      ItemName: 'test',
      ItemPrice: 40,
      ItemQuantity: 1,
      IsCompleted: true
    },
  ];

  constructor(
    private fb: FormBuilder
  ) {
    this.inventoryItemsForm = this.fb.group({
      ItemName: ['', [Validators.required]],
      ItemPrice: ['', [Validators.required]],
      ItemQuantity: ['', [Validators.required]],
      CreatedAt: new Date(),
      UpdatedAt: null,
    })
  }

  get FC() {
    return this.inventoryItemsForm.controls
  }

  addItem(formValue: ItemsModal) {
    if (this.inventoryItemsForm.valid) {
      this.inventoryItemsArray.unshift(formValue);
    } else {
      console.log('invalid')
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.inventoryItemsArray, event.previousIndex, event.currentIndex);
  }

}
