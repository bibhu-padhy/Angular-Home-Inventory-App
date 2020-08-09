import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { AngularFireAuthGuard, redirectLoggedInTo } from '@angular/fire/auth-guard';


const redirectLoggedInToItems = () => redirectLoggedInTo(['items-list']);

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToItems }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
