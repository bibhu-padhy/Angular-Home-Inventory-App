import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';


export interface ModalDataType {
  buttonName: string;
}

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent {

  inventoryItemsForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: ModalDataType,
    public dialogRef: MatDialogRef<ItemFormComponent>
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

  closeModal(formValue) {
    this.dialogRef.close({ response: true, formValue })
  }

}
