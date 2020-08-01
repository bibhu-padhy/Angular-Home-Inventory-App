import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ReactiveFormsModule } from '@angular/forms'
import { PascalCasingPipe } from 'src/app/common/pipes/pascal-casing.pipe'
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ItemDetailsModalComponent } from './dialog-modal/item-details-modal/item-details-modal.component';
import { AddItemsDialogComponent } from './dialog-modal/add-items-dialog/add-items-dialog.component';
import { MaterialModule } from '../app.material.module';
import { ItemsListComponent } from './items-list/items-list.component';
import { NavbarComponent } from '../app-components/navbar/navbar.component';
import { ItemComponent } from './items-list/item/item.component';
@NgModule({
  declarations: [
    HomeComponent,
    PascalCasingPipe,
    ItemDetailsModalComponent,
    AddItemsDialogComponent,
    ItemsListComponent,
    NavbarComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    DragDropModule,
    MaterialModule
  ]
})
export class HomeModule { }
