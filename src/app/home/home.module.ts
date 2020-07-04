import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { InventoryItemComponent } from './inventory-item/inventory-item.component';


@NgModule({
  declarations: [HomeComponent, InventoryItemComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
