import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemListRoutingModule } from './item-list-routing.module';
import { ItemListComponent } from './item-list.component';
import { ItemComponent } from './item/item.component';
import { MaterialModule } from 'src/app/app.material.module';


@NgModule({
  declarations: [
    ItemListComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    ItemListRoutingModule,
    MaterialModule
  ]
})
export class ItemListModule { }
