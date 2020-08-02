import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { MyInventoryComponent } from './my-inventory/my-inventory.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'items-list',
        component: ItemsListComponent
      },
      {
        path: 'my-inventory',
        component: MyInventoryComponent
      },
      {
        path: '',
        redirectTo: 'items-list',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
