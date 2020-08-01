import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyInventoryRoutingModule } from './my-inventory-routing.module';
import { MyInventoryComponent } from './my-inventory.component';


@NgModule({
  declarations: [MyInventoryComponent],
  imports: [
    CommonModule,
    MyInventoryRoutingModule
  ]
})
export class MyInventoryModule { }
