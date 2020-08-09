import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { NavbarComponent } from 'src/app/component/navbar/navbar.component';
import { MaterialModule } from 'src/app/app.material.module';


@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModule
  ]
})
export class MainModule { }
