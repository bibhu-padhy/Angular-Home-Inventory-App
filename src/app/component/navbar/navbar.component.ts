import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/view/login/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { ItemFormComponent } from 'src/app/common/dialog/item-form/item-form.component';
import { ItemsModal, InventoryService } from 'src/app/view/inventory/services/inventory.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public dialog: MatDialog,
    private inventoryService: InventoryService
  ) { }

  ngOnInit() {
  }

  openDialog() {
    const dialogRef = this.dialog.open(ItemFormComponent, {
      data: {
        buttonName: 'ADD'
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.response) {
        this.addItem(result.formValue);
      }
    });
  }

  async addItem(formValue: ItemsModal) {
    formValue.UserId = await this.authService.getUserId();
    this.inventoryService.addItem(formValue);
  }

}
