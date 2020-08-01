import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddItemsDialogComponent } from 'src/app/home/dialog-modal/add-items-dialog/add-items-dialog.component';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(
    private dialog: MatDialog,
    public authService: AuthService,
  ) { }

  openItemForm() {
    this.dialog.open(AddItemsDialogComponent);
  }

}
