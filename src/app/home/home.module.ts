import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { InventoryItemComponent } from './inventory-item/inventory-item.component';
import { ReactiveFormsModule } from '@angular/forms'
import { PascalCasingPipe } from 'src/app/common/pipes/pascal-casing.pipe'
import { DragDropModule } from '@angular/cdk/drag-drop';
@NgModule({
  declarations: [
    HomeComponent,
    InventoryItemComponent,
    PascalCasingPipe
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    DragDropModule
  ]
})
export class HomeModule { }
