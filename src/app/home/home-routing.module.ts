import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ItemsListComponent } from './items-list/items-list.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'my-inventory',
        loadChildren: () => import('src/app/my-inventory/my-inventory-routing.module').then(m => m.MyInventoryRoutingModule)
      },
      {
        path: 'items-list',
        component: ItemsListComponent
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
