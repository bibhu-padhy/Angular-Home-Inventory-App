import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './view/container/main/main.component';


import { redirectUnauthorizedTo, AngularFireAuthGuard } from '@angular/fire/auth-guard';


const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['auth/login']);


const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('src/app/view/login/login.module').then(m => m.LoginModule)
  },
  {
    path: '',
    component: MainComponent,
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin },
    children: [
      {
        path: 'items-list',
        loadChildren: () => import('src/app/view/item-list/item-list.module').then(m => m.ItemListModule)
      },
      {
        path: 'inventory',
        loadChildren: () => import('src/app/view/inventory/inventory.module').then(m => m.InventoryModule)
      },
      {
        path: 'my-profile',
        loadChildren: () => import('src/app/view/my-profile/my-profile.module').then(m => m.MyProfileModule)
      },
      {
        path: 'login',
        loadChildren: () => import('src/app/view/login/login.module').then(m => m.LoginModule)
      },
    ]
  },

  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
