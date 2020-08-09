import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './app.material.module';
import { MainModule } from './view/container/main/main.module';
import { firebaseConfig } from './utils/config';


// firebase
import { AngularFireModule } from '@angular/fire'
import { AngularFireAuthModule } from '@angular/fire/auth'
import { AngularFireDatabaseModule } from '@angular/fire/database'
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard';
import { ItemFormComponent } from './common/dialog/item-form/item-form.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ItemFormComponent
  ],
  entryComponents: [
    ItemFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MainModule,

    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthGuardModule,

    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
